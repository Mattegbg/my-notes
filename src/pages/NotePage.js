import React, {useState, useEffect} from 'react';
import { Link , useParams} from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

//import notes from '../assets/data';
//import { useParams } from 'react-router-dom';

function NotePage({ match, history }) {
    const { id } = useParams();

   

    //tog bort raden nedan för att få ID att funka. La till params ovan.
    //let noteId = match.params.id// skapar ID för note till app.js 

    let [note, setNote] = useState(null)

    useEffect(() => {

        getNote()
    }, [id])


    let getNote = async () => {
        console.log(id)
        let response = await fetch(`http://localhost:5000/notes/${id}`)
        let data = await response.json()
        setNote(data)
    }



    let updateNote = async () => {
        await fetch(`http://localhost:5000/notes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...note, 'updated': new Date() })
        })
    }

    //Creates a new note
    let createNote = async () => {
        await fetch(`http://localhost:5000/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({...note, 'updated': new Date() })
        })
    }


//Links to the Deletebutton further down, when press 'DELETE' it relocates to the homepage. Deletefunction to deletebutton.     
    let deleteNote = async () => {
        await fetch(`http://localhost:5000/notes/${id}`, {
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        })
        history.push('/')
    }

//noteId undefined???? skrev id istället för noteID FUNKADE. 

    let handleSubmit = () => {
        if(id != 'new' && !note.body ){
            deleteNote()
        } else if(id !== 'new'){
            updateNote()
        }else if(id === 'new' && note !==null){
            createNote()

        }

        history.push('/')
    }


    //let note = notes.find(note => note.id == id)
    return (
        <div className='note'>

            <div className='note-header'>
                

                <h3>
                <Link to="/">
                    
                    <ArrowLeft onClick={handleSubmit} />
                
                </Link>

                
                </h3> 
                
                {id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ):( 
                    <button onClick={handleSubmit}>Done</button>

                )}

            </div>

            <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} value={note?.body}></textarea>


        </div>
    )
}

export default NotePage;