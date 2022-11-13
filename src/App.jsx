import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostAction, loadPostAction } from './store/actions/postAction';
import { addCommAction, loadCommAction } from './store/actions/commAction';
import { addPostAction } from './store/actions/postAction';

const App = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	console.log(state);
	const [titleArticle, setTitleArticle] = useState('');
	const [bodyArticle, setBodyArticle] = useState('');

	const [bodyComm, setBodyComm] = useState('');
	const [emailComm, setEmailComm] = useState('');
	const [nameComm, setNameComm] = useState('');

	const [titlePost, setTitlePost] = useState('');

	return (
		<div>
			<button onClick={() => dispatch(loadPostAction())}>getPosts</button>
			<br />

			<input
				placeholder="ввести назание статьи"
				onChange={(e) => setTitleArticle(e.target.value)}
			></input>
			<input
				placeholder="ввести telo статьи"
				onChange={(e) => setBodyArticle(e.target.value)}
			></input>
			<button
				onClick={() =>
					dispatch(addPostAction(titleArticle, bodyArticle))
				}
			>
				add Posts
			</button>
			<br />

			<button onClick={() => dispatch(deletePostAction(titleArticle))}>
				delete one Post with titleArticle
			</button>
			<br />

			<input
				placeholder="ввести title поста"
				onChange={(e) => setTitlePost(e.target.value)}
			></input>

			<button
				onClick={() =>
					dispatch(loadCommAction(state.post.posts, titlePost))
				}
			>
				get Comments with title post
			</button>
			<br />
			<input
				placeholder="ввести тело комм"
				onChange={(e) => setBodyComm(e.target.value)}
			></input>
			<input
				placeholder="ввести мейл комм"
				onChange={(e) => setEmailComm(e.target.value)}
			></input>

			<input
				placeholder="ввести имя комм"
				onChange={(e) => setNameComm(e.target.value)}
			></input>
			<button
				onClick={() =>
					dispatch(
						addCommAction(
							state.post.posts,
							bodyComm,
							emailComm,
							nameComm,
							titleArticle
						)
					)
				}
			>
				add Comments with title post названием статьи
			</button>
		</div>
	);
};

export default App;
