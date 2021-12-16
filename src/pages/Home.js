import React, {Fragment, useState, useEffect} from 'react'
import {Form} from '../components/Form'
import {Notes} from '../components/Notes'


export const Home = () => {
    const [notes, setNotes] = useState([])

    useEffect(()=> {
        console.log('test')
        updateNotes()
    },[])

    const updateNotes = (keyWord) => {
        const list = localStorage.getItem('notes_list')

        if (keyWord){
            try{
                console.log(list)
                setNotes((JSON.parse(list)).filter((note, phrase) => (note.taskName.toLowerCase()).includes(keyWord.toLowerCase()) || (note.taskText.toLowerCase()).includes(keyWord.toLowerCase())))
            }catch(e){}
        } else if (list) {
            try{
                console.log('update')
                setNotes(JSON.parse(list))
            }catch(e){}
        }
    }

    const applySort = (list) => {
        console.log('applySort')
        setNotes(list)
    }

            

    return (
       <Fragment>
            <Form updateNotes={updateNotes} applySort={applySort}/>
            <Notes notes={notes} updateNotes={updateNotes} applySort={applySort}/>
       </Fragment>  
    )
}