import React, { Component } from 'react';
import { connect } from 'react-redux';
// import RefreshButton from './refreshButton.jsx'
import { NavLink } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
    addComment: (id, content = document.getElementById('commentBox').value) => {
        return fetch('http://localhost:3001/comments', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postId: Number(id) + 1,
                body: content
            })
        })
    }
})

const mapStateToProps = state => {
    return {
        titles: state.titles,
        bodies: state.bodies,
        comments: state.comments
    }
}

class Post extends Component {
    constructor(props){
        super(props)
        console.log(props);
        props.readComments(this.props.id)
    }

    render(){
        const comments = [];
        for(let i in this.props.comments[this.props.id]){
            comments.push(<p>{this.props.comments[this.props.id][i].body}</p>)
        }

        console.log('comment elements for this post: ', this.props.comments);

        return(
            <div>
                <h1>{this.props.titles[this.props.id]}</h1>
                <p>{this.props.bodies[this.props.id]}</p>
                {comments}
                <form>
                    <input type="text" id="commentBox"/>
                </form>
                    <button onClick={e => {e.preventDefault;
                                           this.props.addComment(this.props.id)
                                           .then(this.props.readComments(this.props.id))}}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)