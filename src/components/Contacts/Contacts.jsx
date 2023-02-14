
// import propTypes from 'prop-types';
import { useState } from 'react';
// import css from './Contacts/contacts.module.css'



export const Contacts = ({handleOnSubmit}) => { 

   
    // const [name, setName] = useState('')
    // const [number, setNumber] = useState('')

    const [state, setState] = useState ({
        name: '',
        number:'',
     }
 )

     const  handleOnChange = (e) => {
    const { name, value } = e.target;
          setState((prev) => ({...prev,  [name]: value.trim().toLowerCase()}) );
           console.log(value);
    };

    const onSubmit = e => {
     e.preventDefault();
        handleOnSubmit(state)
        setState({ name: "", number: "" })
        
    }
        


   
         const { name, number } = state;

        return (
            <>
                <h1 >PhoneBook</h1>
                <form onSubmit={onSubmit} >
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleOnChange}
                        value={name}
                        minLength={3}
                        // id={this.nameId}
                        
                    />
                    <label>Number</label>
                    <input
                         type="tel"
                         name="number"
                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleOnChange}
                        value={number}
                        minLength={8}
                        // id={this.numberId}

                    />
                    <button type="submit">Add contact</button>
                </form>
            </>
        )
    }


// Contacts.propTypes = {
//     handleOnSubmit: propTypes.func.isRequired,
// }