import React, { Component } from 'react'

const asyncComponent = (wrappedComponent) => {
    return class extends Component{
        state = {
            component : null
        }
        componentWillMount(){
            wrappedComponent()
            .then((response) => {
                alert()
                this.setState({
                    component  :response.default
                })
            })
            .catch(() => {

            })
        }

        render(){
            return this.state.component ? <this.state.component {...this.props } /> : null 
        }
    }
} 

export default asyncComponent;