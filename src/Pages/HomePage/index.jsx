import React from 'react';
import RouteGoService from "../../Services/Stores/Routes/Route.services";
import {route} from "../../Services/Stores/Routes/Route.interfaces";
import {observer} from "mobx-react";
import TopServices from "../../Component/Substances/TopServices/TopServices";
import "./index.scss"
import Slider from "../../Component/Substances/Slider/Slider";
import AdvanceCard from "../../Component/Substances/AdvanceCards/AdvanceCard";
import Burial from "../../Assets/icon/AdvanceCardsIcons/burial.png";
import Dragon from "../../Assets/icon/AdvanceCardsIcons/dragon.png";
import Skull from "../../Assets/icon/AdvanceCardsIcons/skull.png";
import Viking from "../../Assets/icon/AdvanceCardsIcons/viking.png";
import WhyUs from "../../Component/Substances/WhyUs/WhyUs";


const MainPage = () => {
    const AdvanceCardData = [
        {
            pic: <img className="AdvanceCardPic" src={Burial}/>,
            title: "SUSPENDISSE",
            description: "Quisque id tellus quis risus vehicula vehicula ut turpis. In eros nulla, placerat vitae at, vehicula ut nunc.",
            name: "learn more",
            color: "orange",
            onClick: () => RouteGoService.RouterGo(route.Name.ABOUT)
        },
        {
            pic: <img className="AdvanceCardPic" src={Dragon}/>,
            title: "SUSPENDISSE",
            description: "Quisque id tellus quis risus vehicula vehicula ut turpis. In eros nulla, placerat vitae at, vehicula ut nunc.",
            name: "learn more",
            onClick: () => RouteGoService.RouterGo(route.Name.ABOUT)
        },
        {
            pic: <img className="AdvanceCardPic" src={Skull}/>,
            title: "SUSPENDISSE",
            description: "Quisque id tellus quis risus vehicula vehicula ut turpis. In eros nulla, placerat vitae at, vehicula ut nunc.",
            name: "learn more",
            onClick: () => RouteGoService.RouterGo(route.Name.ABOUT)
        },
        {
            pic: <img className="AdvanceCardPic" src={Viking}/>,
            title: "SUSPENDISSE",
            description: "Quisque id tellus quis risus vehicula vehicula ut turpis. In eros nulla, placerat vitae at, vehicula ut nunc.",
            name: "learn more",
            onClick: () => RouteGoService.RouterGo(route.Name.ABOUT)
        },
    ]


    return (
        <div className="HomePage">
            <Slider/>
            <div className="content">

                <TopServices/>
                <div className="AdvanceCards">
                    {AdvanceCardData.map((item) => <AdvanceCard obj={item}/>)}
                </div>
                <WhyUs
                    
                    title={"Lorem"}
                    desc={"Quisque id tellus quis risus vehicula vehicula ut turpis. In eros nulla, placerat vitae at, vehicula ut nunc."}
                />

            </div>
        </div>
    );
};

// TODO убрать обсервек как только он будет использован где-то еще
export default observer(MainPage)