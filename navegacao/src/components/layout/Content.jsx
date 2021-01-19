import React from 'react'
import './Content.css'
import {Switch, Route, Router} from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                <Param />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
        </Switch>
    </main>

)

export default Content