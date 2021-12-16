import React, {useState, useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const CreateForm = () => {
    const [note, setNote] = useState({
        taskName: '',
        taskText: '',
    })

    const alert = useContext(AlertContext)


    const submitHandler = event => {
        event.preventDefault()
        let currentArray = []

        if (note.taskName.trim()) {

            const data = localStorage.getItem('notes_list')

            if (data){
                try{
                    currentArray = JSON.parse(localStorage.getItem('notes_list'))
                }catch(e){}
            }
                    
            currentArray.push({
                ...note,
                taskDate: new Date()
            })

            localStorage.setItem('notes_list', JSON.stringify(currentArray))
            alert.show('Задача была создана', 'success')
            setNote({taskName: '', taskText: ''})

        } else {
            alert.show('Введите текст')
        }
    }



    return (
        <div >
            <div className="form-group">
                <div className='inputForm'>
                    <label for="exampleFormControlInput1" class="form-label">Заголовок задачи</label>
                        <input 
                            type="text" 
                            
                            className="form-control" 
                            style={{marginBottom:16}}
                            value={note.taskName}
                            onChange={e => setNote({...note, taskName: e.target.value})}
                        />
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Текст задачи</label>
                            <textarea 
                                class="form-control" 
                                rows="3"
                                type="text" 
                                className="form-control"
                                value={note.taskText}
                                onChange={e => setNote({...note, taskText: e.target.value})}
                                >
                            </textarea>
                        </div>
                </div>
            </div>
            <button type="button" class="btn btn-outline-primary" onClick={submitHandler}>Создать</button>
        </div>
    )
}