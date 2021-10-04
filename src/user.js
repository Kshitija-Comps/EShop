import React from "react";
import "./style.css";
export default function Cards(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
  
          <div class="column">
            <div class="image">
              <img src={user.avatar} alt=""></img>
            </div>
              <div class="info">
                <h2>
                  <span><b>{ user.id+' '+user.first_name +' '+ user.last_name }</b></span>
                </h2>
                <p>{user.email}</p>
                <button type="button" class="btn btn-secondary">Know more</button>
                
                </div>
                
            </div>
          
        );
      })}
    </>
  );
}