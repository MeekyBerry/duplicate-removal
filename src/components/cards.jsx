import React from "react";
import DeleteIcon from "../assets/img/delete.png";

export const Card = ({ char, count, color, handleClick }) => {
  const cardStyle = {
    backgroundColor: color,
    width: "100px",
    height: "100px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "45px",
    fontWeight: "900",
    fontFamily: "Fira Sans",
    color: "#f2f2f0",
    marginBottom: "5px",
  };

  return (
    <div className="screenTwo__card">
      <button onClick={handleClick} className="screenTwo__card__delete-btn">
        <img
          src={DeleteIcon}
          alt="delete Icon"
          className="screenTwo__card__delete-img"
        />
      </button>
      <div className="screenTwo__card--char" style={cardStyle}>
        {char}
      </div>
      {count > 1 ? (
        <p className="screenTwo__card--count">Duplicates: {count}</p>
      ) : (
        <p className="screenTwo__card--count">No Duplicate</p>
      )}
    </div>
  );
};

export const SuccessCard = ({ char, color }) => {
  const cardStyle = {
    backgroundColor: color,
    width: "100px",
    height: "100px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "45px",
    fontWeight: "900",
    fontFamily: "Fira Sans",
    color: "#f2f2f0",
  };

  return (
    <div className="screenTwo__card--char" style={cardStyle}>
      {char}
    </div>
  );
};
