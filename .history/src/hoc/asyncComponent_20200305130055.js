import React, { Component } from 'react'

const asyncComponent = (wrappedComponent) => {
    return class extends Component{
        state = {
            component
        }
        componentWillMount(){
            wrappedComponent()
            .then(() => {

            })
            .catch(() => {

            })
        }
    }
}