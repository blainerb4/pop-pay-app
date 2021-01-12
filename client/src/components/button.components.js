import React from 'react';

import './button.styles.css'

const STYLES = ['btn--primary', 'btn--outline']; //apply styles and colors so it doesnt mattee where it is we can update it without adding custom classes
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];
const COLOR = ['primary', 'blue', 'red', 'green'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? 
    buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? 
    buttonSize : SIZES[0];
    const checkButtonColor = COLOR.includes(buttonColor) ?
    buttonColor : null;
    return (
        <button className=
        {`btn${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
        onClick={onClick} type={type}
        >{children}</button>
    )
}