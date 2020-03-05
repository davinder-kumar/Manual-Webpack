import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import routes from './routes'
class App extends Component {
    render(){
        return(
            <div>
                <div>
                    <Link to={routes.home}>Users</Link>
                    <Link to={routes.pizza}>Pizza</Link>
                </div>
                <div>
                    <Route path={routes.home} Component
                </div>
            </div>
        )
    }
}