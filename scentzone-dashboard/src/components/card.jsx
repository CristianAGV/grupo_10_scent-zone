import React from "react";

function Card(props) {
    return (
        
        <div className="dashboard-card" id="dash-card">
            <h2>{props.total}</h2>
            <p>{props.object} en la base de datos</p>
            
        </div>
        
    )
}

export default Card;