import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { routes } from './routes'
import Users from './containers/Users'
import asyncComponent from './hoc/asyncComponent'

const PizzaAsync = asyncComponent(() => {
    return import('./containers/Pizza')
})

class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <Link to={routes.users}>Users</Link>
                    <Link to={routes.pizza}>Pizza</Link>
                </div>
                <div>
                    <Route path={routes.users} component={Users} />
                    <Route path={routes.pizza} component={PizzaAsync} />
                </div>
            </div>
        )
    }
}

export default App;