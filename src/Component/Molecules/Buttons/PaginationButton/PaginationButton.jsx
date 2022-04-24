import React from 'react';
import "./PaginationButton.css";
import ButtonStandard from "../../../Atoms/ButtonStandard/ButtonStandard";

const PaginationButton = (props) => {
    const {children, name, color = '', onClick, extClass = ''} = props;
    return (
        <ButtonStandard
            extClass={`PaginationButton ${color ? "PaginationButton-" + color : ''} ${extClass}`}
            onClick={onClick}>
            {children}
        </ButtonStandard>
    );
};

export default PaginationButton;