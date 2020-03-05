import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import routes from './routes'
import Users from './containers/Users'
// import Pizza from './containers/Pizza'
import asyncComponent from './hoc/asyncComponent'

const PizzaAsync = asyncComponent( () =>{
    import('./containers/Pizza')
})

class App extends Component {

    render(){
        console.log(routes,"dsa")
        return(
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