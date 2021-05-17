import './App.css';
import {AppBar, FormControl, IconButton, InputLabel, makeStyles, MenuItem, Select, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MessageIcon from "@material-ui/icons/Message";
import GraphIcon from "@material-ui/icons/BarChart";
import VendorContract from './VendorContract';
const useStyles = makeStyles((theme)=>({
  appBar:{
    backgroundColor: "#162835"
  },
  rootHeader:{
    flexGrow:"1"
  },
  title:{
    flex: "1 1 auto",
    display: "inline-flex"
  },
  selectBox:{
    borderRadius:"2px",
    border: "1px solid #FFFFFF",
    height:"28px"
  },
  formControl:{
    minWidth:"170px",
    margin: theme.spacing(1),
    color:"white"
  },
  inputLabel:{
    marginTop:"-14px",
    color: "white"
  },
  verticalBar:{
    display:"flex",
    flexDirection:"column",
    color: "rgba(0,0,0,0.54)",
    borderRight: "2px solid lightgray",
    width: "28px",
    height:"100vh",
    alignItems:"center",
    padding:"10px"
  }
}))

function App(props) {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.rootHeader}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <IconButton>
            <MenuIcon style={{color:"white"}} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>Infosys NIA</Typography>
        <IconButton>
          <SearchIcon style={{color:"white"}}/>
        </IconButton>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>Choose project</InputLabel>
        <Select
        className={classes.selectBox}
        ><MenuItem>Project 1</MenuItem><MenuItem>Project 2</MenuItem><MenuItem>Project 3</MenuItem></Select>
        </FormControl>
        <NotificationsIcon />
        <AccountCircleIcon />
        </Toolbar>
      </AppBar>
      </div>
      <div style={{display:"flex"}}>
      <div className={classes.verticalBar}>
        <GraphIcon style={{padding:"15px"}} />
        <MessageIcon style={{padding:"15px",color:"blue"}}/><MessageIcon style={{padding:"15px"}}/><MessageIcon style={{padding:"15px"}}/><MessageIcon style={{padding:"15px"}}/><MessageIcon style={{padding:"15px"}}/><MessageIcon style={{padding:"15px"}}/>
      </div>
      <VendorContract />
      </div>
    </div>
  );
}

export default App;
