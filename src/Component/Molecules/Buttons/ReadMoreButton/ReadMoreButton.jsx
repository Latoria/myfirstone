import React from 'react';
import ButtonStandard from "../../../Atoms/ButtonStandard/ButtonStandard";
import "./ReadMoreButton.scss"

const ReadMoreButton = (props) => {
    const {name, color = '', onClick, extClass = ''} = props;
    return (
        <ButtonStandard
            extClass={`ReadMoreButton ${color ? "ReadMoreButton-" + color : ''} ${extClass}`}
            onClick={onClick}>
            {name}
        </ButtonStandard>
    );
};

export default ReadMoreButton;