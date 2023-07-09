import PropTypes from 'prop-types';

function ColorBox(props) {
    const { color } = props;
    
    return (
        <div className="box" style={{ backgroundColor: color }}>B</div>
    )
}

// Declare all Props used in this component
ColorBox.propTypes = {
    color: PropTypes.string.isRequired,
    rounded: PropTypes.bool,
};

// Don't forget to set default values for optional Props 
ColorBox.defaultProps = {
    rounded: true,
};

export default ColorBox;