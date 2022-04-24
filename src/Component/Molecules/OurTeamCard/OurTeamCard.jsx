import React from 'react';
import {ReactComponent as PermMedia} from "../../../Assets/icon/perm_media.svg";
import {ReactComponent as MailOutline} from "../../../Assets/icon/location_on.svg";
import {ReactComponent as LocationOn} from "../../../Assets/icon/mail_outline.svg";
import {ReactComponent as Call} from "../../../Assets/icon/call.svg";
import ReadMoreButton from "../Buttons/ReadMoreButton/ReadMoreButton";
import "./OurTeamCard.css"

const OurTeamCard = (props) => {

    const {obj} = props;
    return (
        <div>
            <div className="our-team__card">
                <div className="our-team__content">
                    <p>  {obj.text}
                    </p>
                    <div className="our-team__social ">
                        <div className="ourTeam-social__item">
                            <div className="our-team__pic our-team__pic_1"><PermMedia/></div>
                        </div>
                        <div className="ourTeam-social__item">
                            <div className="our-team__pic our-team__pic_2"><MailOutline/></div>
                        </div>
                        <div className="ourTeam-social__item">
                            <div className="our-team__pic our-team__pic_3"><LocationOn/></div>
                        </div>
                        <div className="ourTeam-social__item">
                            <div className="our-team__pic our-team__pic_4"><Call/></div>
                        </div>

                    </div>
                    <ReadMoreButton extClass={"our-team__button"} name={obj.name}></ReadMoreButton>
                </div>

            </div>
        </div>
    );
};

export default OurTeamCard;