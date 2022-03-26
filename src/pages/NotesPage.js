import React from 'react';
import notes from '../assets/data';
import ListItem  from '../components/ListItem';

const NotesPage = () => {
    return (
        <div>
            {notes.map(note =>( //importerar data (array) från -> assets -> data.js
                <ListItem note={note}/> //här skickar vi in ett objekt i ListItem komponenten
            ))}

            
        </div>
    )
}

export default NotesPage;