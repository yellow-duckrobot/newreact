import React from "react";

const ProfileCard = ({ name, bio, isOnline }) => {
  return (
    <div className="card">
      <div>
        <span
          className={`status-indicator ${isOnline ? "status-online" : "status-offline"}`}
          title={isOnline ? "Online" : "Offline"}
        ></span>
      </div>
      <h2 className="card-title">{name}</h2>
      <p className="card-text">{bio ? bio : "This user has no bio yet."}</p>
    </div>
  );
};

export default ProfileCard;