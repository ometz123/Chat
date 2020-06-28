import React, { Component } from 'react';
import './App.css';
import FCChat from './FCComponents/FCChat';

class App extends Component {
  render() {
    return (
      <div style={{ width: 300, margin: "auto" }}>
        <FCChat />
      </div>
    );
  }
}
export default App;


// import React, { Component } from 'react';
// import './App.css';
// import firebase from "firebase"
// import {Input,List, ListItem, ListItemText,Button,TextField} from "@material-ui/core"
// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//         text:"",
//         messages:[],
//         uname:"amit"
//     }
// }   
// componentWillMount(){
//   var firebaseConfig = {
//     apiKey: "...",
//     authDomain: "...",
//     databaseURL: "...",
//     projectId: "...",
//     storageBucket: "...",
//     messagingSenderId: "...",
//     appId: "..."
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   this.getMessages()
// }

// onSubmit=(event)=>{
//   if(this.state.uname=="amit"){
//     if(event.charCode=== 13 && this.state.text.trim() !== ""){
//       console.log(this.state.uname+":\n"+this.state.text)
//       this.writeMessageToDb(this.state.uname+":\n"+this.state.text)
//       this.setState({text:""})
//       this.setState({uname:"timor"})
//     }
//   }
//   else{
//     if(event.charCode=== 13 && this.state.text.trim() !== ""){
//       console.log(this.state.uname+":\n"+this.state.text)
//       this.writeMessageToDb(this.state.uname+":\n"+this.state.text)
//       this.setState({text:""})
//       this.setState({uname:"amit"})
//     }
//   }
 
// }

// writeMessageToDb = (message) =>{
// firebase
// .database()
// .ref("Chat/")
// .push({
//   text:message})
// }

// getMessages = () =>{
//   var messagesDb = firebase.database().ref("Chat/")
//   messagesDb.on("value",snapshot =>{
//     let newMessages = [] 
//     snapshot.forEach(child =>{
//       var message = child.val()
//       newMessages.push({id:child.key,text:message.text})
//     })
//     this.setState({messages:newMessages})
//   })
// }

// renderMessages = () =>{
//   return this.state.messages.map((message)=> 
//     <ListItem>
//      <ListItemText>{message.text} </ListItemText>
//     </ListItem>)
// }

// render() {

//     return (
//         <div style={{width:300,margin:"auto"}}>
          
// <List>
// {this.renderMessages()}
// </List>

// <TextField 
// autoFocus={true}
// multiline={true}
// fullWidth={true}
// rowsMax={3}
// placeholder="Type somthing"
// onChange={event => this.setState({text:event.target.value})}
// value={this.state.text}
// onKeyPress={this.onSubmit}

// />


//         </div>
//     );
//  }
// }

// export default App;
