import React, { Component } from 'react'

const asyncComponent = (wrappedComponent) => {
    return class extends Component{
        state = {
            component : null
        }
        componentWillMount(){
            wrappedComponent()
            .then((response) => {
                this.setState({
                    component  :response.defa
                })
            })
            .catch(() => {

            })
        }
    }
}