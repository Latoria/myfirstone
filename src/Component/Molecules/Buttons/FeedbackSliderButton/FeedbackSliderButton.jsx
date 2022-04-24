import React from 'react';
import ButtonStandard from "../../../Atoms/ButtonStandard/ButtonStandard";
import "./FeedbackSliderButton.css"

const FeedbackSliderButton = (props) => {
    const {children, onClick, isDisabled} = props;
    return (
        <ButtonStandard isDisabled={isDisabled} extClass={`FeedbackSliderButton`} onClick={onClick}>
            {children}
        </ButtonStandard>
    );
};

export default FeedbackSliderButton;