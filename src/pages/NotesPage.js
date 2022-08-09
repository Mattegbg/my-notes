import React, { useState, useEffect } from 'react';
//import notes from '../assets/data';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';



//hämtar data från vår provisoriska "cloud" databas/server på port:5000
const NotesPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => { 
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('http://localhost:5000/notes')
        let data = await response.json()

        setNotes(data)
    }

    return (
        // under där vi skriver "&#9782;" gör att vi får en symbol som liknar en lista eller liknande brevid notes. Bra trick!
        // Rad 12 "notes-count" gör att vi ser hur många notes vi har på sidan. 
        <div className='notes'>

            <div className='notes-header'>
                <h2 className='notes-title'> &#9782;Notes </h2>
                <p className='notes-count'>{notes.length}</p>
            </div>

            <div className='notes-list'>

                {notes.map((note, index) => ( //importerar data (array) från -> assets -> data.js
                    <ListItem key={index} note={note} /> //här skickar vi in ett objekt i ListItem komponenten
                ))}

            </div>

        
            <AddButton />



        </div>
    )
}

export default NotesPage;