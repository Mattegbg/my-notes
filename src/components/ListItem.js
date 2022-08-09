import React from "react";
import { Link } from 'react-router-dom';


//link nedan gör att jag kan gå in och trycka på varje text på hemsidan och sedan länkas direkt till sidan med samma ID som texten. 
//Key las till i NotesPage.js



let getTime = (note) => {
    return new Date(note.updated).toLocaleDateString()
}


//getTitle below: if you have a long sentence as a note, it will only take the first line as a title.
let getTitle = (note) => {
    //split by new lines and just get the first line as title
    //Split will make a list of each line and will only pull on the first line by index zero
    const title = note.body.split('\n')[0]
    if (title.length > 45){
        return title.slice(0,45)
    }

    return title
}

let getContent = (note) => {
    //Get content after title
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', '') //replace the spacing between the new lines.
    content = content.replaceAll(title, '') //Remove title from the body?

    if(content.length > 45){ // if the content is bigger than 45 characters then we add 3 ... to let them know its more to read.
        return content.slice(0,45) + '...' 
    } else {
       return content
    }
}


// At the H3 tag below it get the 'getTitle' function from above. 
//<p><span>{getTime(note)}</span></p> This does so you can se date, time etc when the note is updated. The styling is based on the CSS Styling we got.
const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
                <h3>{getTitle(note)}</h3>  
                <p><span>{getTime(note)}</span>{getContent(note)}</p>  

            </div>
        </Link>
    )
}

export default ListItem;