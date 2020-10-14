import React from "react";
import "./Contact.css";

const users = [
  {
    name: "Robert Reyes",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    online: false
  },
  {
    name: "Nellie Caldwell",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    online: true
  },
  {
    name: "Vernon Mason",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    online: true
  },
  {
    name: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: false
  },
  {
    name: "Juanita Phillips",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    online: true
  }
];

const Contact = (props) =>{
  return(
  <div className="Contact">
  <img className="avatar" src={props.image} alt="an avatar" />
  <div>
    <p className="name">{props.name}</p>
    <div className="status">
      <div
        className={props.status ? "status-online" : "status-offline"}
      ></div>
      <p className="status-text">{props.status ? "online" : "offline"}</p>
    </div>
  </div>
</div>
  )}

function ContactList(props){
  return (
    <div>
    {users.map((item) => (
  <Contact image={item.avatar} name={item.name} status={item.online} />
))}</div>
   
  );
};

// export default Contact;
export default ContactList;


// import React from "react";
// import "./Contact.css";

// function Contact(props) {
//   return (
//     <div className="Contact">
//       <img className="avatar" src={props.avatar} alt="an avatar" />
//       <div>
//         <p className="name">{props.name}</p>
//         <div className="status">
//           <div
//             className={props.online ? "status-online" : "status-offline"}
//           ></div>
//           <p className="status-text">{props.online ? "online" : "offline"}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;