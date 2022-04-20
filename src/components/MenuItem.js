import React from "react";
import {useHistory} from 'react-router-dom'

function MenuItem({ data }) {
  const history = useHistory();
  return (
    <div>
      {data.map(data=>
    <div className="menuItem" >
      <div style={{ backgroundImage: `url(${data.recipe.image})` }}> </div>
      <h3> {data.recipe.label} </h3>
      <p>calories: {Math.round(data.recipe.calories)} </p>
      <button 
          onClick={() => history.push('/recipe/:Buy')}
          type="button" className="btn btn-info"  data-toggle="modal" data-target="#exampleModal">
          Buy
      </button>
    </div>
    )}
    </div>
  );
}

export default MenuItem;
