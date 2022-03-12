import React from "react";

export default function Projs(wah){
    return(
    <div className="proj">
      <div className="proj-card">
        <h3>{wah.title}</h3>
        <div className="proj-info">
          <p><i>{wah.roles}</i></p>
        </div>
        <div className="proj-info">
          <p>
            - {wah.desc01}<br />
            - {wah.desc02}
          </p>
        </div>
      </div>

      
    </div>
    );
}