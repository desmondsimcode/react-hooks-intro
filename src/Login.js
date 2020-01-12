import React, { useState } from 'react';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(null);
	const handleSubmit = event => {
		event.preventDefault(); //To make sure the page is not getting reload when the form is submitted
		//below here we can do form validation
		const userData = {
			username,
			password
		};
		setUser(userData);
		//below is to clear out the input when the form is submitted
		setUsername('');
		setPassword('');
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<h2>Login</h2>
			<form
				style={{
					display: 'grid',
					justifyItems: 'center',
					alignItems: 'center'
				}}
				onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Username'
					onChange={event => setUsername(event.target.value)}
					value={username}
				/>
				<input
					type='password'
					placeholder='Password'
					onChange={event => setPassword(event.target.value)}
					value={password}
				/>
				<button type='submit'>Submit</button>
			</form>
			{user && JSON.stringify(user, null, 2)}
		</div>
	);
}
