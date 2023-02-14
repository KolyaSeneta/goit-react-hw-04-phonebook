import propTypes from 'prop-types';


export const ContactDelete = ({ contacts, handleOnDelete }) => (
  <div >
    <ul >
      {contacts.map((contact, id) => (
        <li key={id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            
            onClick={() => handleOnDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactDelete.propTypes = {
    contact: propTypes.arrayOf(propTypes.exact({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.number.isRequired,
    })
    ),
    handleOnDelete: propTypes.func.isRequired,

}