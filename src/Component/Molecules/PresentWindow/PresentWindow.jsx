import React from 'react';
import "./PresentWindow.scss"

const PresentWindow = (props) => {
    const {obj, children} = props;
    return (
        <div className={`PresentWindow ${obj.pos}`}>
            <div className={`PresentWindowPanel ${obj.size}`} style={{backgroundColor: "#" + obj.panelColor}}>
                <div className="WholePanel">
                    <div className="LeftHalfPanel">
                        <div className="RoundDotPanel"></div>
                        <div className="RoundDotPanel"></div>
                        <div className="RoundDotPanel"></div>
                    </div>
                    <div className="RightHalfPanel">
                        <div className="OvalDotPanel"></div>
                    </div>
                </div>
                <div className={`PresentWindowContent ${obj.color}`} >

                    {children}
                </div>


            </div>
        </div>
    );
};

export default PresentWindow;