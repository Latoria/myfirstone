import React from 'react';
import ReadMoreButton from "../../Molecules/Buttons/ReadMoreButton/ReadMoreButton";
import "./AdvanceCard.scss";

const AdvanceCard = (props) => {
    const {obj, onClick, color=''} = props;
    return (
        <div className="AdvanceCard">
            <div className="AdvanceCardContent">
                {obj.pic}
                <h1 className="AdvanceCardTitle"> {obj.title} </h1>
                <p className="AdvanceCardDescription"> {obj.description}  </p>
                <ReadMoreButton
                    color={obj.color ? obj.color : ''}
                    extClass={`ReadMoreButton ${color ? "ReadMoreButton-" + color : ''}  ReadMoreButtonPosition`}
                    name={obj.name}
                    onClick={obj.onClick}
                >
                </ReadMoreButton>
            </div>
        </div>
    );
};

export default AdvanceCard;