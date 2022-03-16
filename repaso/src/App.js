import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CreateUser from './components/CreateUser'

import { Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Dos alternativas para lo mismo */}
      <NavBar />
      {/* <Route path={'/'} component={NavBar}/> */}

      {/*Dos alternativas para hacer lo mismo*/ }
      <Route path={'/home'}>
        <Home name={'Nicolas'} age={36}/>
      </Route>
      {/* <Route path={"/home"} render={() => <Home name={"Nicolas"} age={36} />} /> */}

      <Route path={'/create'}>
        <CreateUser/>
      </Route>

    </>
  );
}

export default App;
