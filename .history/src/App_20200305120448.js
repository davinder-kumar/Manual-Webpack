import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import routes from './'
class App extends Component {
    render(){
        return(
            <div>
                <div>
                    <Link to="/">Users</Link>

                </div>
            </div>
        )
    }
}