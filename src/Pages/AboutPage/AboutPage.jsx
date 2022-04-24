import React from 'react';
import RouteGoService from "../../Services/Stores/Routes/Route.services"
import {route} from "../../Services/Stores/Routes/Route.interfaces";
import "./AboutPage.css"
import OurTeamCard from "../../Component/Molecules/OurTeamCard/OurTeamCard";
import OurIndicators from "../../Component/Substances/OurIndicators/OurIndicators";
import OurHappyClients from "../../Component/Substances/OurHappyClients/OurHappyClients";


const AboutPage = () => {
    const toMainPage = () => {
        RouteGoService.RouterGo(route.Name.HOME, undefined, AboutPage.name)
    }

    const arr = [
        {
            name: "John",
            text: "Curabitur quis nisl in leo euismod venenatis eu in diam. Etiam auctor diam pellentesque lectus vehicula mattis. Nulla ac massa at dolor condimentum"
        },
        {
            name: "John",
            text: "Curabitur quis nisl in leo euismod venenatis eu in diam. Etiam auctor diam pellentesque lectus vehicula mattis. Nulla ac massa at dolor condimentum"
        },
        {
            name: "John",
            text: "Curabitur quis nisl in leo euismod venenatis eu in diam. Etiam auctor diam pellentesque lectus vehicula mattis. Nulla ac massa at dolor condimentum"
        },
        {
            name: "John",
            text: "Curabitur quis nisl in leo euismod venenatis eu in diam. Etiam auctor diam pellentesque lectus vehicula mattis. Nulla ac massa at dolor condimentum"
        },
    ]
    const OurClients = ["Nokia", "Fanta", "Gucci", "Dyadya Fyodor", "Eldorado", "Tiffany", "Bentley"];
    return (
        <div className="AboutPage">

            <div className="BreadCrumbNav">
                <div className="BreadCrumbNavWrapper">
                    <div className="BreadCrumbCurrent">About us</div>

                    <div className="BreadCrumbs">
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="our-team">
                <div className="our-team__inner our-team__inner_margin_bottom">
                    <div className="our-team__block-with-text__margin-top">
                        <h2 className="our-team__h2">Donec faucibus ultricies congue</h2>
                        <p className="our-team__p">Maecenas eget turpis turpis. Nunc vel metus augue. Aenean euismod
                            cursus ligula eget dapibus. Praesent vel erat in tortor placerat dignissim. Duis dapibus
                            aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.
                            Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant
                            morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                    <OurIndicators/>
                    <h1 className="our-team__h1">Our Team</h1>
                    <div className="our-team__cards our-team__cards_margin">{
                        arr.map((item) => {
                            return <OurTeamCard obj={item}/>
                        })
                    }</div>
                    <div className="our-team__block-with-text our-team__block-with-text__text-center ">
                        <h2 className="our-team__h2 our-team__h2_orange our-team__h2_center our-team__h2_thin">Best
                            Solution is the simplest IDEA!</h2>
                        <p className="our-team__p our-team__p_center">Capacitance cascading integer reflective interface
                            data development high bus cache dithering transponder. Curabitur vitae velit in neque dictum
                            blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. </p>
                    </div>
                    <OurHappyClients arr={OurClients}/>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;