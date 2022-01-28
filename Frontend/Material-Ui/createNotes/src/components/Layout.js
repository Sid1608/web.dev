import { makeStyles } from '@mui/styles'
import React from 'react'
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';//ul/ol
import ListItem from '@mui/material/ListItem';//li
import ListItemIcon from '@mui/material/ListItemIcon';//content inside ListItem
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory,useLocation } from 'react-router-dom';
import {format} from 'date-fns'
import {Avatar} from '@mui/material'
const drawerWidth=240

const useStyle=makeStyles((theme)=>{
    return {
        page:{
            backgroundColor:'#f9f9f9',
            width:'100%',
            padding:theme.spacing(3)
        },
        drawer:{
            width:drawerWidth
        },
        drawerPaper:{
            width:drawerWidth
        },
        root:{
            display: 'flex',
        },
        active:{
            background:'#f4f4f4'
        },
        title:{
            padding:theme.spacing(2)
        },
        appbar:{
            width:`calc(100% - ${drawerWidth}px)`
        },
        toolbar:theme.mixins.toolbar,
        date:{
            flexGrow:1
        },
        avatar:{
            marginLeft:theme.spacing(2)
        }
    }
})
function Layout({children}) {
    const classes=useStyle()
    const history=useHistory();
    const location=useLocation();
    const menuItems=[
        {
            text:'My Notes',
            icon:<SubjectOutlined color="secondary"/>,
            path:'/'
        },
         {
            text:'Create Note',
            icon:<AddCircleOutlined color="secondary"/>,
            path:'/create'
        }
    ]
    return (
        <div className={classes.root}>
            {/* {app bar} */}
            <AppBar 
              className={classes.appbar}
              elevation={0}
            >
                <Toolbar >
                {/* //it will take up all the possible space horizontally available to it and it's going ot push this next one all the way over to right */}
                    <Typography className={classes.date}>
                        Today is the {format(new Date(),'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Maria
                    </Typography>
                    <Avatar
                        src=""
                        className={classes.avatar}
                    />
                </Toolbar>
            </AppBar>
            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{paper:classes.drawerPaper}}
             >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Ninja Notes
                    </Typography>
                </div>
                {/* list/links */}
                <List>
                    {
                        menuItems.map((item)=>{
                        return <ListItem
                            button
                            key={item.text} 
                            onClick={()=>history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText 
                                primary={item.text}
                            />
                        </ListItem>
                        })
                    }
                    
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout
