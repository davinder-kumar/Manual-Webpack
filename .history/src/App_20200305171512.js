import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import routes from './routes'
import Users from './containers/Users'
// import Pizza from './containers/Pizza'
import asyncComponent from './hoc/asyncComponent'

// const PizzaAsync = asyncComponent( () =>{
//     import('./containers/Pizza')
// })

class App extends Component {
    render(){
        return(
            <div>
                <div>
                   
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default App;