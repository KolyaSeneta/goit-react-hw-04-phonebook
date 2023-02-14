import propTypes from 'prop-types';
// import css from './Filter/filter.module.css';

export const Filter = ({ filter, handleOnChange }) => (
    <div>
        <label >Find contacts by Name </label>
        <input type="text" name='filter' placeholder='Filter'
        value={filter} onChange={handleOnChange}
        >
            
        </input>
    </div>
)

Filter.propTypes = {
    filter: propTypes.string.isRequired,
    handleOnChange: propTypes.func.isRequired,
}