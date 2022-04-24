import React from 'react';
import "./WhyUs.scss"
import PresentWindows from "../PresentWindows/PresentWindows";
import OurIndicators from "../OurIndicators/OurIndicators";


const WhyUs = (props) => {
    const {title, desc} = props;

    return (
        <div className="WhyUsContent">
            <h1 className="WhyUsTitle">{title}</h1>
            <p className="WhyUsDescription">{desc}</p>
            <PresentWindows/>

            <OurIndicators/>

        </div>
    );
};

export default WhyUs;