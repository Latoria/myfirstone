import React from 'react';
import PresentWindow from "../../Molecules/PresentWindow/PresentWindow";
import "./PresentWindows.css"

const PresentWindowsArr = [
    {
        size: "PresentWindowSmall",
        pos: "PresentWindowLeft",
        color: "PresentWindowGreen",
        panelColor: "ccd2d3",
        title: "Your image here"
    },
    {
        size: "PresentWindowBig",
        pos: "PresentWindowCenter",
        color: "PresentWindowGray",
        panelColor: "c1c7c8",
        title: "Your image here"
    },
    {
        size: "PresentWindowSmall",
        pos: "PresentWindowRight",
        color: "PresentWindowGreen",
        panelColor: "ccd2d3",
        title: "Your image here"
    },
]

const PresentWindows = (props) => {
    return (
        <div>
            <div className="PresentWindows">
                {PresentWindowsArr.map((item) => <PresentWindow obj={item}> {item.title} </PresentWindow>)}
            </div>
        </div>
    );
};

export default PresentWindows;