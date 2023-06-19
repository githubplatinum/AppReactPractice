import React from 'react';

function Cars(props) {
     

      return (
        <div>

        <ul>
            <li><p>{props.car.brand}</p></li>
            <li><p>{props.car.model}</p></li>
            <li><p>{props.car.year}</p></li>
          </ul>
        
        </div>
      );

}
export   default Cars;