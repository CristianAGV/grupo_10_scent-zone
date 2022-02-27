import React from "react";

function Card(props) {
    return (
        
        <div className="dashboard-card" id="dash-card">
            <h2>{props.total}</h2>
            <p>{props.object} in database</p>
            
        </div>
        
    )
}

export default Card;