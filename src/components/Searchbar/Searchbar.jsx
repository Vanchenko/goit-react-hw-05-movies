import PropTypes from 'prop-types';
import { Main, Form, Button, Input} from './Searchbar.styled'

export const Searchbar = ({value, onChange, SearchOnSubmit}) => (
    <>
        <Main>
            <Form onSubmit={SearchOnSubmit}>
                <Button type="submit" />
                <Input
                type="text"
                placeholder="Search movies"
                value={value}
                onChange={onChange}
                />
            </Form>
        </Main>
    </>
)

Searchbar.propTypes = {
  SearchOnSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};