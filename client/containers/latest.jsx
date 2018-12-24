import React, { Component } from 'react';
import { connect } from 'react-redux';
import RefreshButton from '../components/refreshButton.jsx'
import { NavLink } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
    
})

const mapStateToProps = state => {
    return {
        titles: state.titles,
        bodies: state.bodies
    }
}

class Latest extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let posts = [];
        for(let i in this.props.titles){
            posts.push(
                <div>
                    <NavLink
                        to={'/'+i}
                        className = "titlePreviews">
                        {this.props.titles[i]}
                    </NavLink>
                </div>
            )
        }

        return(
            <div>
                <RefreshButton></RefreshButton>
                <h1>All the latest posts!</h1>
                {posts}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Latest)