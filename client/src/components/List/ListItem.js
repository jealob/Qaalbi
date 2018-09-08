import React from "react";

export const ListItem = props => (
 <div>
      <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 my-2 d-inline-block">
        <p>{props.name}</p >
      </div>
      <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 my-2 d-inline-block">
        <p>{props.date}</p >
      </div>
    </div>
);
