import React from 'react'
import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'; 
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { green, pink, yellow ,blue} from '@mui/material/colors';

const useStyles=makeStyles({
    avatar:{
        backgroundColor:(note)=>{
            if(note.category === 'work'){
                return yellow[700]
            }
            if(note.category === 'money'){
                return green[500]
            }
            if(note.category === 'todos'){
                return pink[700]
            }
            return blue[500]
        }
    }
})

function NoteCard({note,handleDelete}) {
    const classes=useStyles(note);
    return (
        <div>
             <Card elevation={1} >
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                    <IconButton onClick={()=>{handleDelete(note.id)}}>
                        <DeleteOutlineOutlinedIcon />
                    </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
                

             </Card>
        </div>
    )
}

export default NoteCard
