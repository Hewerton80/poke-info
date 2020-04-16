import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";


export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact exact component={Home} />


            {/* <Route path='/editregister' exact render={routesProps =>(
                sessionStorage.getItem("UsrToken")
                ? 
                <UpdateRegister {...routesProps} />
                :
                <Redirect to="/"/>
            )}/> */}
        </Switch>
    </BrowserRouter>
  );
}
