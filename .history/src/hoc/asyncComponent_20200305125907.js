import React, { Component } from 'react'

const asyncComponent = (wrappedComponent) => {
    return class extends Component{
        state
        componentWillMount(){
            wrappedComponent()
            .then(() => {

            })
            .catch(() => {

            })
        }
    }
}