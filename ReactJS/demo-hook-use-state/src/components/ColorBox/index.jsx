import './styles.scss'
import { useState } from 'react'

ColorBox.propTypes = {

};

ColorBox.defaultProps = {

};

function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'orange', 'lime', 'black', 'blue', 'red'];
    return COLOR_LIST[Math.trunc(Math.random() * COLOR_LIST.length)];
}

function ColorBox(props) {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem("box_color") || "deeppink";
        console.log(initColor);
        return initColor;
    });
    
    function handleBoxClick() {
        // Get random color --> Set color
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    }

    return (
        <div 
            className="color-box" 
            style={{ background: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;