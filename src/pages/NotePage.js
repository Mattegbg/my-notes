import React from 'react';
import notes from '../assets/data';
import { useParams } from 'react-router-dom';

function NotePage({ match }) {
    const { id } = useParams();

    //tog bort raden nedan för att få ID att funka. La till params ovan.
    //let noteId = match.params.id// skapar ID för note till app.js 

    let note = notes.find(note => note.id == id)
    return (
        <div className='note'>
            <div className='note-header'>

            </div>

            <textarea value={note?.body}></textarea>

            
        </div>
    )
}

export default NotePage;