import { useState } from "react";

const Form = (props) => {
    const [contacts, setContacts] = useState({
        firstname: "",
        lastname: "",
        phonenumber: 0,
        emailaddress: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const firstname = event.target.value;
        setContacts((contact) => ({ ...contact, firstname }));

    }

    const handleLastnameChange = (event) => {
        const lastname = event.target.value;
        setContacts((contact) => ({ ...contact, lastname }));

    }

    //A function to handle the post request
    const postContact = (newContact) => {
        return fetch('http://localhost:4002/api/contacts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(newContact)
      }).then((response) => {
          return response.json()
      }).then((data) => {
        console.log("From the post ", data);
        props.addContact(data);
      
    });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postContact(contacts);
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>First Name</label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="First Name"
                    required
                    value={contacts.firstname}
                    onChange={handleNameChange}

                />
                <label>Last Name</label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Last Name"
                    required
                    value={contacts.lastname}
                    onChange={handleLastnameChange}
                />
            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;