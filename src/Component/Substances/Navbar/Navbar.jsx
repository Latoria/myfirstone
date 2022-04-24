import React, {useState} from 'react';
import "./Navbar.scss"
import RouteGoService from "../../../Services/Stores/Routes/Route.services";
import {route} from "../../../Services/Stores/Routes/Route.interfaces";
import NavButton from "../../Molecules/Buttons/NavButton/NavButton";
import {ReactComponent as IconSearch} from "../../../Assets/icon/icon_search.svg"
import DropButton from "../../Molecules/Buttons/DropButton/DropButton";


const Navbar = () => {

    const toHomePage = () => {
        RouteGoService.RouterGo(route.Name.HOME)
    }
    const toAboutPage = () => {
        RouteGoService.RouterGo(route.Name.ABOUT)
    }
    const toServicesPage = () => {
        RouteGoService.RouterGo(route.Name.SERVICES)
    }
    const toPortfolio1Page = () => {
        RouteGoService.RouterGo(route.Name.PORTFOLIO1)
    }
    const toPortfolio2Page = () => {
        RouteGoService.RouterGo(route.Name.PORTFOLIO2)
    }
    const toPortfolio3Page = () => {
        RouteGoService.RouterGo(route.Name.PORTFOLIO3)
    }
    const toBlogPage = () => {
        RouteGoService.RouterGo(route.Name.BLOG)
    }
    const toFeaturesPage = () => {
        RouteGoService.RouterGo(route.Name.FEATURES)
    }
    const toContactsPage = () => {
        RouteGoService.RouterGo(route.Name.CONTACTS)
    }

    const dropButtonList = [
        {name: 'Portfolio1', onClick: toPortfolio1Page},
        {name: 'Portfolio2', onClick: toPortfolio2Page},
        {name: 'Portfolio3', onClick: toPortfolio3Page},
    ];
    const [isVisible, setIsVisible] = useState(false);

    const DropButtonSwitch = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="Navbar">
            <div className="NavbarContent">
                <div className="NavbarLogo">
                    <span className="Modus">Modus</span> <span className="Versus">versus</span>
                </div>
                <div className="NavbarLinks">
                    <NavButton name={"Home"} isActive={true} onClick={toHomePage}/>
                    <NavButton name={"About"} onClick={toAboutPage}/>
                    <NavButton name={"Service"} onClick={toServicesPage}/>
                    <DropButton onClick={DropButtonSwitch} visible={isVisible} arr={dropButtonList} name={"Portfolio"} />
                    <NavButton name={"Blog"} onClick={toBlogPage}/>
                    <NavButton name={"Features"} onClick={toFeaturesPage}/>
                    <NavButton name={"Contacts"} onClick={toContactsPage}/>
                    <IconSearch/>
                </div>
            </div>
        </div>
    );

}

export default Navbar;