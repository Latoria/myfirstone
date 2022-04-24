import React from 'react';
import "./DropButton.scss";
import ButtonStandard from "../../../Atoms/ButtonStandard/ButtonStandard";
import {ReactComponent as Icon_expand_more} from "../../../../Assets/icon/icon_expand_more.svg";

const DropButton = (props) => {
    const { arr, name, onClick, visible} = props;

    return (

        <div onClick={onClick} className="DropButton" >
            <Icon_expand_more/>
            {name}
            {/*Если $$, проверяется трушность до первого фолса*/}
            {visible && <div className="DropButtonSelect">
                {arr.map((item) => <ButtonStandard
                    beforeIcon={<Icon_expand_more className="DropButtonRotate"/>}
                    extClass={"SelectButton"}
                    onClick={item.onClick}
                >
                    {item.name}
                </ButtonStandard>
                )}
            </div>
            }
        </div>

    );
};

export default DropButton;