import React from 'react';
import PropTypes from 'prop-types';
import './Comments.css';

const Comments = ({comments}) => {
	const CommentList = comments.map((element, index) => {
		debugger
		return(
			<div className='Comments' key={index}>
				<div className='User'></div>
				<span className='Text'>{element.value}</span>
			</div>
		)
	})
	return (
		<div>
			<div className='CommentsContainer'>
				<input className='CommentsBox' type="text" placeholder='escriba un comentario'/>
				<button className='CommentButton'> > </button>
			</div>
			{CommentList}
		</div>
	)
}



export default Comments;