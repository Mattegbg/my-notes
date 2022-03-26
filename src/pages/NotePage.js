import React from 'react';
import notes from '../assets/data';
import { useParams } from 'react-router-dom';

function NotePage({ match }) {
    const { id } = useParams();

    //let noteId = match.params.id// skapar ID för note till app.js

    let note = notes.find(note => note.id == id)
    return (
        <div>
            <p>{note?.body}</p>
        </div>
    )
}

export default NotePage;