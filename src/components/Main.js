import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Scores from './Scores'
import Board from './Board'


const Main = () => (
    <main>
        Main
        <div id="container"></div>
        <Switch>
            <Route exact path='/' component={Board}/>
            <Route path='/scores' component={Scores}/>
        </Switch>

    </main>
)

export default Main