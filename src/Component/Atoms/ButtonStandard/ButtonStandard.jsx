import React from 'react';
import "./ButtonStandard.scss"

const ButtonStandard = (props) => {
    const {beforeIcon, children, extClass = '', onClick, isDisabled} = props; // props.children
    return (
        <button disabled={isDisabled} className={`${extClass} ButtonStandard`} onClick={onClick}>
            <div className="BeforeIconPosition">{beforeIcon}</div>
            {children}
        </button>
    );
};

export default ButtonStandard;