import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import routes from './routes'
class App extends Component {
    render(){
        return(
            <div>
                <div>
                    <Link to={routes.}>Users</Link>

                </div>
            </div>
        )
    }
}