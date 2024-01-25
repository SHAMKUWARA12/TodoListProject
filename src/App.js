import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ToDoListItem from './ToDoListItem'

const App = () => {

    const [item, setItem] = useState('');
    const [addTodoItem, setAddTodoItem] = useState([]);

    const additems = () => {
        setAddTodoItem((prevValue) => {
            return [...prevValue, { text: item, checked: false }]
        })
        setItem('');
    }

    const deletetodoitem = (index) => {
        setAddTodoItem((prevTodos) => {
            const newTodos = [...prevTodos];
            newTodos.splice(index, 1);
            return newTodos;
        });
    };

    const addLineThrough = (index) => {
        setAddTodoItem((prevTodos) => {
            const newTodos = [...prevTodos];
            newTodos[index].checked = !newTodos[index].checked;
            return newTodos;
        });
    };

    return (
        <>
            <div className='maincontainer'>
                <div className='container py-5 h-100'>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-8 py-4 px-4 myapp">
                            <h1 className='text-center my-3'>Todo List</h1>
                            <div className="todoinput my-3">
                                <input
                                    type="text"
                                    placeholder='Add Items '
                                    value={item}
                                    onChange={(event) => {
                                        setItem(event.target.value);
                                        console.log(event.target.value)
                                    }}
                                />
                                <button className='btn btn-primary addbtn' onClick={additems}>Add</button>

                            </div>
                            <div className='listitems'>
                                <ul className='list-group'>
                                    {addTodoItem.map((value, index) => {
                                        return <ToDoListItem
                                            text={value.text}
                                            checked={value.checked}
                                            index={index}
                                            key={index}
                                            onDelete={deletetodoitem}
                                            onToggleLineThrough={addLineThrough}
                                        />
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App