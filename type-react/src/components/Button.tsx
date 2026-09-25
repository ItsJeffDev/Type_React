import { useState } from 'react';

function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    function toggle() {
        setIsOn(!isOn);
    }
    return (
        <button onClick={toggle}>
            {isOn ? 'ON' : 'OFF'}
        </button>
     )
}

export default ToggleButton;