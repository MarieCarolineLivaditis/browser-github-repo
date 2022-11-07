import PropTypes from 'prop-types';
import './style.scss';

function Message({ totalCount, search, isLoading }) {
  let message;

  if (search === '') {
    message = 'Tapez votre recherche';
  }
  else if (isLoading) {
    message = `Une recherche est en cours pour le terme ${search}`;
  }
  else if (totalCount === 0 && !isLoading) {
    message = `Vous avez cherché le terme ${search}.
    Aucun résultat trouvé.`;
  }
  else if (totalCount === 1 && !isLoading) {
    message = `Vous avez cherché le terme ${search}.
    Un résultat trouvé.`;
  }
  else if (totalCount && !isLoading) {
    message = `Vous avez cherché le terme ${search}.
    La recherche a donné ${totalCount} résultats.`;
  }
  return (
    <p className="message">{message}</p>
  );
}

Message.propTypes = {
  totalCount: PropTypes.number,
  search: PropTypes.string,
  isLoading: PropTypes.bool,
};

Message.defaultProps = {
  totalCount: undefined,
  search: '',
  isLoading: false,
};

export default Message;
