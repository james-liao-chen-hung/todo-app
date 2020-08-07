import React from 'react'
import { ListItem, List, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {

    
    return (
        <div className="todo__list">
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary={props.todo.id} />            
                </ListItem>
            </List>
            <DeleteForeverIcon onClick={event => {db.collection('todos').doc(props.todo.id).delete()}}></DeleteForeverIcon>
        </div>
    )
}

export default Todo
