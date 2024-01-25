import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const ToDoListItem = (props) => {
    const handleToggleLineThrough = () => {
        props.onToggleLineThrough(props.index);
    };

    const handleDelete = () => {
        props.onDelete(props.index);
    };

    return (
        <>
            <div className="addeditems">
                <input
                    type="checkbox"
                    checked={props.checked}
                    onChange={handleToggleLineThrough}

                />
                <li className='list-group-item my-1'
                    style={{ textDecoration: props.checked ? 'line-through' : 'none' }}>{props.text}</li>
                <button
                    onClick={handleDelete}
                ><CloseIcon className='closebtn'/></button>
            </div>
        </>
    )
}

export default ToDoListItem