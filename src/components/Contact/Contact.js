import React from "react"
import "./Contact.css";

// Perform conditional rendering of the status indicator and associated text, not based on the prop online, but of the value of online stored in the state.


// Transform Contact in class component
class Contact extends React.Component {
    constructor(props){
      super(props);
      
    // Add a state to it: this one will just contain online or offline.
    // First, initialize this boolean to false.
      this.state = { status: this.props.online }
    }

    // Make a click on the status indicator reverse the attribute online in the state.
    statusMode = () => {
        this.setState({online: !this.state.online})
      };
    render(){
      return(
        <div>
          <figure class="Contact">

              <img  class="avatar" src={this.props.avatar} alt={this.props.name} />

            <div>
                <span class="name">{this.props.name}</span>

                <div class="status" onClick={this.statusMode}>

                <div class={this.state.online ? "status-online" : "status-offline"} onClick={this.statusMode}></div>
                
                <p onClick={this.statusMode} class="status-text">{this.state.online ? "online" : "offline"}</p></div>

            </div>
       </figure>
       </div>
      );
    }
  }
   
  export default Contact;