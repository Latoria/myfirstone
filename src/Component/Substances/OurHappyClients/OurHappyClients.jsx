import React, {useState} from 'react';
import "./OurHappyClients.scss"
import FeedbackSliderButton from "../../Molecules/Buttons/FeedbackSliderButton/FeedbackSliderButton";
import {ReactComponent as Left} from "../../../Assets/icon/icon_chevron_left.svg";
import {ReactComponent as Right} from "../../../Assets/icon/icon_chevron_right.svg";

const OurHappyClients = (props) => {
    const {arr} = props;


    const [Client, setClient] = useState(0);

    const ClientTurnRight = () => {


        setClient(Client + 1)

    };
    const ClientTurnLeft = () => {
        setClient(Client - 1)
    };

    return (
        <div>
            <div className="our-clients__upper-bar">
                <p className="our-clients__p">Our Happy Clients</p>

                <div className="ClientsFeedBackArrows">
                    <FeedbackSliderButton onClick={ClientTurnLeft} isDisabled={Client - 1 < 0}> <Left/>
                    </FeedbackSliderButton>
                    <FeedbackSliderButton onClick={ClientTurnRight} isDisabled={Client + 4 >= arr.length}> <Right/>
                    </FeedbackSliderButton>
                </div>
            </div>
            <div className="our-clients__items our-clients__items_margin">
                {
                    arr.slice(Client, Client + 4).map((item) => <div className="our-clients__item">
                        <h2>{item}</h2></div>)
                }

            </div>
        </div>
    );
};

export default OurHappyClients;