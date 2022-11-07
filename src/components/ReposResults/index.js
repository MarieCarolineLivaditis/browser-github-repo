import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import Result from './Result';
import './style.scss';

function ReposResults({ result }) {
  return (
    <Card.Group itemsPerRow={3} stackable as="main">
      {result.map((item) => (
        <Result
          key={item.id}
          avatarUrl={item.owner.avatar_url}
          name={item.name}
          maintainer={item.owner.login}
          description={item.description}
          url={item.owner.html_url}
        />
      ))}
    </Card.Group>
  );
}

ReposResults.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
