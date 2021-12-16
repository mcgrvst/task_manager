import React, {useState, useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Form = ({updateNotes}) => {
    const [value, setValue]= useState('')

    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()
        let currentArray = []

        if (value) {
            updateNotes(value.trim())

        } else {
            updateNotes()
        }
    }



    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Поиск"
                    value={value}
                    onChange={e => {
                        setValue(e.target.value)
                        updateNotes(e.target.value)
                    }}
                />
            </div>
        </form>
    )
}