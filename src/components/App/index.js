// == Import
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MenuBar from '../MenuBar';
import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../ReposResults';
import Faq from '../Faq';
import ButtonMoreResults from '../ButtonMoreResults';
import LoadingResults from '../LoadingResults';
import Page404 from '../Page404';

import GitHubLogo from '../../assets/images/logo-github.png';
import './styles.scss';

// == Composant
function App() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [currentSearch, setCurrentSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const changeValue = (newSearch) => {
    setSearch(newSearch);
  };

  const changeResultsPage = () => {
    setCurrentPage((oldPage) => oldPage + 1);
  };

  const resetRequest = () => {
    setCurrentPage(1);

    setResult([]);
  };

  const submitValue = () => {
    if (!search) {
      return;
    }

    setCurrentSearch(search);
    resetRequest();
  };

  useEffect(() => {
    if (!currentSearch) {
      return;
    }

    setIsLoading(true);

    const data = axios.get(`https://api.github.com/search/repositories?q=${currentSearch}&sort=stars&order=desc&page=${currentPage}&per_page=9`)
      .then((response) => {
        // handle success
        if (data) {
          if (currentPage === 1) {
            const responseData = response.data;
            setResult(responseData);
          }
          else {
            const responseData = response.data;
            setResult((oldValue) => ({
              ...oldValue,
              items: [
                ...oldValue.items,
                ...responseData.items,
              ],
            }));
          }
        }
        setIsLoading(false);
      })
      // eslint-disable-next-line arrow-body-style
      .catch((error) => {
        // handle error
        return false;
      })
      .finally(() => {
        setSearch('');
      });
  }, [currentSearch, currentPage]);

  return (
    <div className="app">
      <img className="logo" src={GitHubLogo} alt="Githublogo" />
      <Routes>
        <Route
          path="/browser-github-repo/search"
          element={(
            <>
              <MenuBar />
              <SearchBar
                changeValue={changeValue}
                submitValue={submitValue}
                search={search}
              />
              <Message
                totalCount={result.total_count}
                search={currentSearch}
                isLoading={isLoading}
              />
              {(!result.items && isLoading) && <LoadingResults />}
              {result.items && <ReposResults result={result.items} />}
              {result.items
              && result.total_count > 1
              && (
              <ButtonMoreResults
                isLoading={isLoading}
                changeResultsPage={changeResultsPage}
              />
              )}
            </>
        )}
        />
        <Route
          path="/browser-github-repo/faq"
          element={(
            <>
              <MenuBar />
              <Faq />
            </>
          )}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
