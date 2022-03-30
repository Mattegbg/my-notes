import React from 'react';
import notes from '../assets/data';
import ListItem from '../components/ListItem';

const NotesPage = () => {
    return (
        // under där vi skriver "&#9782;" gör att vi får en symbol som liknar en lista eller liknande brevid notes. Bra trick!
        // Rad 12 "notes-count" gör att vi ser hur många notes vi har på sidan. 
        <div className='notes'>

            <div className='notes-header'>
                <h2 className='notes-title'> &#9782;Notes </h2>
                <p classname='notes-count'>{notes.length}</p>
            </div>

            <div className='notes-list'>

                {notes.map((note, index) => ( //importerar data (array) från -> assets -> data.js
                    <ListItem key={index} note={note} /> //här skickar vi in ett objekt i ListItem komponenten
                ))}

            </div>




        </div>
    )
}

export default NotesPage;