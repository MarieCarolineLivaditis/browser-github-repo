import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

function Result({
  avatarUrl, name, maintainer, description, url
}) {
  return (
    <Card className="card" color="teal" href={url} target="_blank">
      <Image src={avatarUrl} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span>{maintainer}</span>
        </Card.Meta>
        <Card.Description className="card-description">
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

Result.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  maintainer: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
};

Result.defaultProps = {
  description: '',
};

export default Result;
