import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Poke from "./pages/poke";
import Types from "./pages/types";
import Habilits from './pages/habilities'
import Items from './pages/items'

import Login from "./pages/login";
import Register from "./pages/register";


export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />

            <Route path='/' exact component={Home} />
            <Route path='/tipos' exact component={Types} />
            <Route path='/habilidades' exact component={Habilits} />
            <Route path='/itens' exact component={Items} />
            <Route path='/pokemon/:name' exact component={Poke} />

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
