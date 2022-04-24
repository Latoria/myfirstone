import React, {useState} from 'react';
import FeedbackSliderButton from "../Buttons/FeedbackSliderButton/FeedbackSliderButton";
import "./FeedbackSlider.scss"
import {ReactComponent as Right} from "../../../Assets/icon/icon_chevron_right.svg";
import {ReactComponent as Left} from "../../../Assets/icon/icon_chevron_left.svg";


const FeedbackSlider = (props) => {
    const {arr} = props;

    const [feedbackCurrent, setfeedbackCurrent] = useState(0);
    const feedbackNext = () => feedbackCurrent + 1 > arr.length - 1 ? setfeedbackCurrent(0) : setfeedbackCurrent(feedbackCurrent + 1);
    const feedbackPrev = () => feedbackCurrent - 1 < 0 ? setfeedbackCurrent(arr.length - 1) : setfeedbackCurrent(feedbackCurrent - 1);

    return <div>
        <h5 className="ClientsFeedBackTitle"> What Client's Say ?</h5>

        <div className="ClientsFeedBackText FeedBackVisible"> {arr[feedbackCurrent].text}</div>
        <div className="ClientsFeedBackName"> {arr[feedbackCurrent].name}</div>
        <div className="ClientsFeedBackArrows ClientsFeedBackArrows_margin ClientsFeedBackArrows_flex-end">
            <FeedbackSliderButton onClick={feedbackPrev}> <Left/> </FeedbackSliderButton>
            <FeedbackSliderButton onClick={feedbackNext}> <Right/> </FeedbackSliderButton>
        </div>
    </div>
        ;
};

export default FeedbackSlider;