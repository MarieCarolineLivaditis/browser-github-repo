import PropTypes from 'prop-types';
import { Segment, Form, Input } from 'semantic-ui-react';

function SearchBar({ changeValue, submitValue, search }) {
  const handleChange = (event) => {
    changeValue(event.target.value);
  };

  const handleSubmit = () => {
    submitValue();
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Input fluid onChange={handleChange} value={search} placeholder="Chercher un repo" icon="search" iconPosition="left" />
        </Form.Field>
      </Form>
    </Segment>
  );
}

SearchBar.propTypes = {
  changeValue: PropTypes.func.isRequired,
  submitValue: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default SearchBar;
