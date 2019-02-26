import React from 'react';
function handleDecrementClick(){
    console.log('BlahBlah')
};
function handleIncrementClick(){
    console.log('Touloulou')
};

const Buttons = (props) => {
    return ( 
        <div>
            <button className="ui red basic button" onClick={handleDecrementClick}>Decrement</button>
            <button className="ui green basic button"onClick={handleIncrementClick}>Increment</button>
        </div>
     );
}
 
export default Buttons;