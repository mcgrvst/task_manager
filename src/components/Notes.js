import React, {useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { SortButtons } from './SortButtons'
import dayjs from 'dayjs'


export const Notes = ({notes, updateNotes, applySort}) => {
    const alert = useContext(AlertContext)
    const deleteHandler = (index) => {
        const currentNotes = [...notes].filter((note, id) => index !== id)
    localStorage.setItem('notes_list', JSON.stringify(currentNotes))
    updateNotes()
    alert.show('Задача была удалена')
    

    }
    return (
        <div className="list-group">
            <div class='buttonGroup'>
                <SortButtons notes={notes} updateNotes={updateNotes} applySort={applySort}/>
            </div>
            {notes.map((note, index) => (
                <div class="list-group-item d-flex justify-content-between">
                    <button 
                        type="button" 
                        className="btn btn-outline-success btn-sm checkButton"
                        onClick={()=>deleteHandler(index)}
                    >
                        ✓
                    </button>
                    <div class="ms-2 me-auto noteFrame">
                        <div class="noteName">{note.taskName}</div>
                        <div>{note.taskText}</div>
                    </div>
                    <div style={{minWidth: 120}}>{dayjs(note.taskDate).format('DD.MM.YYYY HH:mm')}</div>
                </div>
            ))}

    </div>
    )
}