import React from 'react';


function Test() {
        let code = ["Java","ES6","Ruby"];
        return (
           <div>
              {code.map(item => <p>{item}</p>)}
           </div>)
           
}

export default Test;
  