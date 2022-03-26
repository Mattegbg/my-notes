import React from "react";
import { Link } from 'react-router-dom';


//link nedan gör att jag kan gå in och trycka på varje text på hemsidan och sedan länkas direkt till sidan med samma ID som texten. 
//Key las till i NotesPage.js

const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}> 
        <div className="notes-list-item">
            <h3>{note.body}</h3>
           
        </div>
        </Link>
    )
}

export default ListItem;