import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home'
import Signup from './Signup'
import Details from './Details'

export default (
    <Switch>
       <Route component={Home} exact path='/'/>
       <Route component={Details} path='/details'/>
       <Route component={Signup} path='/signup'/>
    </Switch>
)