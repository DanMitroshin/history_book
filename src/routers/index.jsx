import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {MAIN_URL} from "../constants";
import Block1Page from "../pages/Block1Page";
import Block2Page from "../pages/Block2Page";
import Block3Page from "../pages/Block3Page";
import Block4Page from "../pages/Block4Page";

const MainRouter = () => {
        return <Switch>
                <Route exact path={MAIN_URL.BLOCK_1} component={Block1Page}/>
                <Route exact path={MAIN_URL.BLOCK_2} component={Block2Page}/>
                <Route exact path={MAIN_URL.BLOCK_3} component={Block3Page}/>
                <Route exact path={MAIN_URL.BLOCK_4} component={Block4Page}/>

                <Redirect to={MAIN_URL.BLOCK_1}/>
        </Switch>
};


export default MainRouter;
