import React from "react";
import {AppBar, Button, Card, CardContent, Checkbox, makeStyles, Tab, Tabs, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    headerStyle:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        width: "100%",
        marginLeft:"20px",
        marginBottom:"20px"
    },
    container:{
        width: "calc(100vw - 30px)",
        backgroundColor:"aliceblue"
    },
    title:{
        flex: "1 1 auto",
        display: "inline-flex"
      },
      saveButton:{
          marginTop:"10px",
          marginRight:"40px"
      },
      cardCss:{
          width:"136.5px",
          height:"120px",
          borderRadius:"0px"
      },
      cardCss2:{
        width:"432.5px",
        height:"120px",
        borderRadius:"0px",
        marginLeft:"20px",
        textAlignLast: "left"
    },
    empName:{
        fontSize:"12px"
    },
    appBar:{
        backgroundColor:"white",
        borderRadius:"3px",
        margin:"20px",
        color:"black",
        width:"auto"
    },
    tabColor: {
        background: "#217DF3",
        height: "1px"
      },
      info:{
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
      },
      modelNameCss:{
        backgroundColor: "rgba(0,0,0,0.06)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        textAlignLast: "left",
        width:"416px"
      },
      modelLabel:{
        fontSize: "12px",
        color: "rgba(0,0,0,0.54)"
      },
      modelNameCssCheck:{
          display:"flex",
          flexDirection:"row",
          textAlignLast: "left",
          backgroundColor: "rgba(0,0,0,0.06)",
          padding: "20px",
          width:"416px"
      },
      modelLabelProject:{
          padding:"5px"
      }
}))
function VendorContract() {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.headerStyle}>
                <Typography variant="h6" className={classes.title}>{`<-`} Vendor Contracts {`>`} Fixed price Contracts - English</Typography>
                <Button className={classes.saveButton} variant="contained" color="default">Cancel</Button>
                <Button className={classes.saveButton} variant="contained" color="primary">Save</Button>
            </div>
            <div className={classes.headerStyle}>
                <Card className={classes.cardCss}>
                    <CardContent>
                        <Typography variant="h6">18</Typography>
                        <Typography variant="subtitle1">Intent</Typography>
                    </CardContent>
                </Card>
                <Card className={classes.cardCss}>
                    <CardContent>
                        <Typography variant="h6">18</Typography>
                        <Typography variant="subtitle1">Intent</Typography>
                    </CardContent>
                </Card>
                <Card className={classes.cardCss}>
                    <CardContent>
                        <Typography variant="h6">18</Typography>
                        <Typography variant="subtitle1">Intent</Typography>
                    </CardContent>
                </Card>
                <Card className={classes.cardCss}>
                    <CardContent>
                        <Typography variant="h6">18</Typography>
                        <Typography variant="subtitle1">Intent</Typography>
                    </CardContent>
                </Card>
                <Card className={classes.cardCss2}>
                    <CardContent>
                        <Typography variant="subtitle1">Document Status</Typography>
                        <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{backgroundColor:"#E46766",width:"100px",height:"16px"}}></div>
                        <div style={{backgroundColor:"#EDBE72",width:"100px",height:"16px"}}></div>
                        <div style={{backgroundColor:"#C5DF8F",width:"100px",height:"16px"}}></div>
                        <div style={{backgroundColor:"#90C18D",width:"100px",height:"16px"}}></div>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", marginTop:"10px"}}>
                        <span style={{display:"flex",padding:"5px"}}><div style={{backgroundColor:"#E46766",width:"14px",height:"14px"}}></div>
                        <Typography variant="caption">Unassigned</Typography></span>
                        <span style={{display:"flex",padding:"5px"}}><div style={{backgroundColor:"#EDBE72",width:"14px",height:"14px"}}></div>
                        <Typography variant="caption">Assigned</Typography></span>
                        <span style={{display:"flex",padding:"5px"}}><div style={{backgroundColor:"#C5DF8F",width:"14px",height:"14px"}}></div>
                        <Typography variant="caption">Tagged</Typography></span>
                        <span style={{display:"flex",padding:"5px"}}><div style={{backgroundColor:"#90C18D",width:"14px",height:"14px"}}></div>
                        <Typography variant="caption">Trained</Typography></span>
                        </div>
                    </CardContent>
                </Card>
                <div className={classes.cardCss2} style={{backgroundColor:"white"}}>
                    <div style={{display:"flex"}}>
                        <div style={{margin:"0px 12px"}}>
                            <Typography variant="caption">Assignee</Typography>
                            <p className={classes.empName}>John Doe</p>
                            <p className={classes.empName}>Michelle</p>
                            <p className={classes.empName}>Greg stevert</p>
                        </div>
                        <div style={{margin:"0px 25px"}}>
                            <Typography variant="caption">Assignee</Typography>
                            <p className={classes.empName}>John Doe</p>
                            <p className={classes.empName}>Michelle</p>
                            <p className={classes.empName}>Greg stevert</p>
                        </div>
                        <div style={{margin:"0px 25px"}}>
                            <Typography variant="caption">Assignee</Typography>
                            <p className={classes.empName}>John Doe</p>
                            <p className={classes.empName}>Michelle</p>
                            <p className={classes.empName}>Greg stevert</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.row2}>
                <AppBar position={"sticky"} className={classes.appBar}>
                    <Tabs
                    value="Intents"
                    TabIndicatorProps={{className:classes.tabColor}}
                    >
                        <Tab label="Intents" value="Intents" />
                        <Tab label="Documents" value="Documents"/>
                        <Tab label="Statistics" value="Statistics"/>
                    </Tabs>
                </AppBar>

            </div>
            <div className={classes.info}>
                <div style={{display:"flex",alignSelf:"flex-start",marginLeft:"280px"}}><Typography>Basic information</Typography></div>
                <div style={{backgroundColor:"white",padding:"20px",display:"flex",flexDirection:"row"}}>
                    <div className={classes.modelNameCss}>
                        <span className={classes.modelLabel}>Model name</span>
                        <span>Sample Model Name</span>
                    </div>
                    <div className={classes.modelNameCss} style={{marginLeft:"20px"}}>
                        <span className={classes.modelLabel}>Model name</span>
                        <span>Sample Model Name</span>
                    </div>
                </div>
                <div style={{backgroundColor:"white",padding:"20px",display:"flex",flexDirection:"row",marginTop:"20px"}}>
                <div className={classes.modelNameCssCheck}>
                    <Checkbox checked={true}/>
                    <span className={classes.modelLabelProject}>Project Name</span>
                </div>
                <div>

                </div>
                </div>
            </div>
        </div>
    )
}
export default VendorContract;
