import { useState, useEffect } from "react";
import Form from "./form";
// import DeleteContact from './DeleteContact'

function Contacts() {

    const [contacts, setContact] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4002/api/contacts")
        .then((response) => response.json())
        .then(contacts =>{
          
            for (let index in contacts){
               if( index !== "3"){
                   setContact(contacts);
               }
            };       
        })
        
    }, []);

    

    const addContact = (newContact) => {
        //console.log(newStudent);
        //postStudent(newStudent);
        setContact((contacts) => [...contacts, newContact]);
    }

    const handleDeleteContact = (id) => {
        DeleteContact(id);
    };
    
    const DeleteContact = (id) => {
        fetch(`http://localhost:4002/api/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // if success, do the following
                const newContact = contacts.filter((i) => i.id !== id);
                setContact(newContact);
            })
            .catch((error) => {
                console.error('Error:', error);
                // getUsers()
            });
    }
    


    return (
      <div className="contacts">
        <h2> List of Contacts </h2>
        <ul>
            {contacts.map(contact =>
                <li key={contact.id}> {contact.firstname} {contact.lastname} {contact.phonenumber} {contact.emailaddress}</li>)}
        </ul>
        <button onClick ={handleDeleteContact}>Delete</button>
        <Form addContact={addContact} />
        
      </div>
    );
  }
  
  export default Contacts;