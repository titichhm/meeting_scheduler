import React from 'react';
 
const Header =({head,st,et,pt}) =>{
  
  return(
    <div>
      <ol>
          <h4> {head}</h4>
          <h4>Timing of meeting -</h4><p>{st}-{et}</p>
          <h4>Participants-</h4>
          {pt.map(dta=>(
          <p>{dta}</p>
          ))}
          <br/>
      </ol>
    </div>
  );
}

export default Header;