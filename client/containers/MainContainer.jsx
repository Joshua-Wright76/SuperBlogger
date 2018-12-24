import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Latest from './latest.jsx';
import { connect } from 'react-redux';
import Post from '../components/Post.jsx';
import { readComments } from '../actions/actions.js';

const mapDispatchToProps = dispatch => ({
    readComments: id => {
        dispatch(readComments(id))
    }
})

const mapStateToProps = state => {
    return {
        titles: state.titles,
        bodies: state.bodies
    }
}

class MainContainer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let posts = [];
        for(let i in this.props.titles){
            posts.push(<Route path={'/'+i} render={props => <Post id={i} readComments = {this.props.readComments}/>}/>)
        }
        console.log(posts);

        return(
            <BrowserRouter>
              <Switch>
                <Route path="/" component={Latest} exact/>
                {posts}
              </Switch>
            </BrowserRouter>
          )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)