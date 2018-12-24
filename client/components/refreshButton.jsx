import React, { Component } from 'react';
import { connect } from 'react-redux';
import { refresh } from '../actions/actions.js'

const mapDispatchToProps = dispatch => {
    return {
        refresh: () => {
            dispatch(refresh())
        }
    }
}

const mapStateToProps = state => {
    return {}
}

class RefreshButton extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return <button onClick={this.props.refresh}></button>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RefreshButton)