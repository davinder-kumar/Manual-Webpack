import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import routes from './routes'
import Users from './containers/Users'
import Pizza from './containers/Pizza'
import asyncComponent from './hoc/asyncComponent'
class App extends Component {
    render(){
        return(
            <div>
                <div>
                    <Link to={routes.home}>Users</Link>
                    <Link to={routes.pizza}>Pizza</Link>
                </div>
                <div>
                    <Route path={routes.users} component={Users} />
                    <Route path={routes.pizza} component={Pizza} />
                </div>
            </div>
        )
    }
}

export default App