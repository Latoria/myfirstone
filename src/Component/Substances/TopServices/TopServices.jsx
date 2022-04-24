import React from 'react';
import ReadMoreButton from "../../Molecules/Buttons/ReadMoreButton/ReadMoreButton";
import "./TopServices.scss"

const TopServices = (props) => {
    const {extClass = ''} = props;
    return (
        <div className={`TopServices ${extClass}`}>
            <div className="TopServicesInfo">
                <div className="TopServicesInfo_text">
                    <h1 className="TopServicesInfo_title">Lorem</h1>
                    <p className="TopServicesInfo_description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nisi perspiciatis repellat voluptatibus! Asperiores aspernatur eum minus nisi nulla omnis, optio provident quaerat quas reiciendis sapiente ut veritatis, voluptatibus voluptatum!</p>
                </div>
                <ReadMoreButton color="orange" name={"View more"}/>
            </div>
        </div>
    );
};

export default TopServices;