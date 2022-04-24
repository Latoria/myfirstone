import React, {Suspense} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import {routePath} from "./Services/Stores/Routes/Route.path";
import {RouteActivator} from "./Services/Stores/Routes/RouteActivator";
import "./App.scss";
import Navbar from "./Component/Substances/Navbar/Navbar";
import Footer from "./Component/Substances/Footer/Footer";


const App = () => {
    return (
        <div id="App">
            <HashRouter>
                <Navbar/>
                <RouteActivator/>
                <main className="m-page__wrapper">
                    <Suspense fallback={<></>}>
                        <Routes>
                            {routePath.map(({name, element: Element, path, ...rest}) => (
                                <Route
                                    path={path}
                                    key={name}
                                    element={<Element/>}
                                    {...rest}
                                />
                            ))}
                        </Routes>
                    </Suspense>
                </main>

            </HashRouter>
            <Footer/>
        </div>
    );
}

export default App;
