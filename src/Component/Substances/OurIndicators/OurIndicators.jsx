import React from 'react';
import FeedbackSlider from "../../Molecules/FeedbackSlider/FeedbackSlider";
import "./OurIndicators.css"

const ClientsFeedback = [
    {
        text: "Curabitur quis nisl in leo euismod venenatis eu in diam. ",
        name: "Jhon Doe"
    },
    {
        text: "Curabitur quis nisl in leo in diam. Nulla ac massa at dolor condimentum",
        name: "Bob Ross"
    },
    {
        text: "Curabitur quis nisl in leo euismod venenatis eu in diam. Nulla ac massa at dolor condimentum",
        name: "Jared Padalezki"
    },
    {
        text: "Curabitur quis nisl. Nulla ac massa.",
        name: "Bread Pitt"
    },
    {
        text: "Curabitur quis nisl in leo. Nulla ac massa at dolor.",
        name: "Vasya S Raiona"
    },
    {
        text: "Curabitur quis nisl in leo euismod. Massa.",
        name: "Oliver Twist"
    },
    {
        text: "Curabitur quis nisl in leo euismod venenatis eu in diam. At dolor condimentum",
        name: "Kapusta"
    },
    {
        text: "Curabitur quis nisl in leo euismod venenatis eu in diam. Hfofj dkdopofm. Nulla ac massa at dolor condimentum",
        name: "Ke$ha"
    },
];

const OurIndicators = () => {
    return (
        <div>
            <div className="ClientsFeedBack">
                <div className="ClientsFeedBackLeft">
                    <h5 className="ClientsFeedBackTitle"> Why Choose Us ?</h5>
                    <ul className="orangeLiMarker">
                        <li> Quisque at massa ipsum</li>
                        <li> Maecenas a lorem augue, egestas</li>
                        <li> Cras vitae felis at lacus eleifend</li>
                        <li> Etiam auctor diam pellentesque</li>
                        <li> Nulla ac massa at dolor</li>
                        <li> Condimentum eleifend vitae vitae</li>
                    </ul>
                </div>
                <div className="ClientsFeedBackCenter">
                    <p className="ClientsFeedBackCenterText">
                        Curabitur quis nisl in leo euismod venenatis eu in diam. Etiam auctor diam pellentesque
                        lectus <span className="link">vehicula mattis</span>. Nulla ac massa at dolor condimentum
                        eleifend vitae vitae urna.
                    </p>
                    <div className="ClientsFeedBackCenterIndicators">
                        <div className="ClientsFeedBackCenterIndicatorsItem">
                            <div className="RoundItem">
                                <p className="RoundNumber">50</p>
                            </div>
                        </div>
                        <div className="ClientsFeedBackCenterIndicatorsItem">
                            <div className="RoundItem">
                                <p className="RoundNumber">70</p>
                            </div>
                        </div>
                        <div className="ClientsFeedBackCenterIndicatorsItem">
                            <div className="RoundItem">
                                <p className="RoundNumber">80</p>
                            </div>
                        </div>
                        <div className="ClientsFeedBackCenterIndicatorsItem">
                            <div className="RoundItem">
                                <p className="RoundNumber">100</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="ClientsFeedBackRight">
                    <FeedbackSlider arr={ClientsFeedback}/>


                </div>
            </div>
        </div>
    );
};

export default OurIndicators;