import React, { Component } from 'react'
import PizzaImage from '../components/PizzaImage/PizzaImage'

class Pizza extends Component {
    render() {
        console.log(process.env.PUBLIC_URL)
        return (
            <div>
                <h1>The Pizza</h1>
                <PizzaImage />
            </div>
        )
    }
}

export default Pizza