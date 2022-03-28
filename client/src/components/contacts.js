import { useState, useEffect } from "react";
import Form from "./form";

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


    return (
      <div className="contacts">
        <h2> List of Contacts </h2>
        <ul>
            {contacts.map(contact =>
                <li key={contact.id}> {contact.firstname} {contact.lastname} {contact.phonenumber} {contact.emailaddress}</li>)}
        </ul>
        <Form addContact={addContact} />
      </div>
    );
  }
  
  export default Contacts;