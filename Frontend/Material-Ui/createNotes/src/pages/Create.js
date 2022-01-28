import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { FormControlLabel,Radio,FormLabel ,FormControl} from '@mui/material';

import RadioGroup from '@mui/material/RadioGroup';
const useStyles =makeStyles({
  field:{
    marginTop:20,
    marginBottom:20,
    display: 'block',
  }
})

export default function Create() {
  
  const classes=useStyles();//return as object all classes
  const history =useHistory();
  const [title,setTitle]=useState('');
  const [details,setDetails]=useState('');
  const [titleError,setTitleError]=useState(false);
  const [detailsError,setDetailsError]=useState(false);
  const [category,setCategory]=useState('todos');
  const handleSubmit=(e)=>{
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if(title===''){
      setTitleError(true);
    }
    if(details == ''){
      setDetailsError(true);
    }
    if(title && details){
      console.log(title,details,category);
      fetch('http://localhost:8000/notes',{
        method:'POST',
        headers:{"Content-type":'application/json'},
        body: JSON.stringify({title,details,category})
      })
      .then(()=>history.push('/'))//method to push on a new route
    }
  }
  return (
    <Container>
      <Typography
      className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e)=>setTitle(e.target.value)}
          className={classes.field}
          label="Note Tilte"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
         onChange={(e)=>setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        {/* <RadioGroup>
            <Radio value="hello"/>
            <Radio value="goodbye"/>
        </RadioGroup> */}
        {/* control: */}
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
              <FormControlLabel value="money" control={<Radio/>} label="Money"/>
              <FormControlLabel  value="todos" control={<Radio/>} label="Todos"/>
              <FormControlLabel  value="reminders" control={<Radio/>} label="Reminders"/>
              <FormControlLabel  value="work" control={<Radio/>} label="Work"/>
          </RadioGroup>
        </FormControl>
        
        <Button
          className={classes.btn}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon/>}
       >
        Submit
      </Button>
      </form>
      
      {/* icons */}
    
   
   </Container>
  )
}

