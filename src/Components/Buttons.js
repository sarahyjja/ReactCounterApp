import React from 'react';

const Buttons = (props) => {
    return ( 
        <div>
            <button className="ui red basic button" onClick={props.onDecrement}>Decrement</button>
            <button className="ui green basic button"onClick={props.onIncrement}>Increment</button>
        </div>
     );
}
 
export default Buttons;