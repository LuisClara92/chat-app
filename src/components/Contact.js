import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/men/99.jpg"
        alt="Stephen Lopez"
      />
      <div>
        <h3 className="name">Stephen Lopez</h3>
        <div className="status">
          <div className="status-online"> </div>
          <p className="status-text"> Online</p>
        </div>
      </div>
    </div>
  );
}
