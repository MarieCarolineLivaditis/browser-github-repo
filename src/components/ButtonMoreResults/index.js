import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import './style.scss';

function ButtonMoreResults({ changeResultsPage, isLoading }) {
  const handleClick = (event) => {
    changeResultsPage();
    event.preventDefault();
  };
  return (
    <div className="btn">
      <Button onClick={handleClick} color="teal" loading={isLoading}>Plus de résultats</Button>
    </div>
  );
}

ButtonMoreResults.propTypes = {
  changeResultsPage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ButtonMoreResults;
