import React from 'react';
import ButtonStandard from "../../../Atoms/ButtonStandard/ButtonStandard";
import "./NavButton.scss";

const NavButton = (props) => {

    const {name, isActive, onClick} = props;
    return (
        <ButtonStandard extClass={`NavButton ${isActive ? 'NavButtonCurrent' : ''}`} onClick={onClick}>
            {name}
        </ButtonStandard>

    );
};

export default NavButton;