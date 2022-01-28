import React,{useEffect,useState} from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
//paper: card with drop shadow
import NoteCard from "../components/NoteCard"
import Masonry from 'react-masonry-css'
export default function Notes() {
  const [notes,setNotes]=useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res=>res.json())
      .then(data=>setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`,{
      method: 'DELETE',
    })
    //filter fires function for each item in notes
    //and evalute each one if we return true it keep that 
    //and if false don't keep it
    const newNotes=notes.filter(note=>note.id != id)
    setNotes(newNotes)
  }
  const breakpoints={
    default:3,
    1100:2,
    700:1
  }
  return (
    <Container>
      {/* it takes base spacing value which is 8px and times it by 3 add 24 px between each card  */}
      <Masonry
         breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {
          notes.map((note=>{
            return <div item key={note.id} >
               <NoteCard note={note} handleDelete={handleDelete}/>
            </div>
          }))

        }
      </Masonry>
     
    </Container>
  )
}
