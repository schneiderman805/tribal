import React from "react";
import { NavLink, Link } from 'react-router-dom'

export default function RegistrationForm(props) {
	return (
		<div>
			<form id="Registration-form" name="Registration-form" onSubmit={props.onSubmit}>
				<label htmlFor="First name">First name</label>
				<input
					onChange={props.onChange}
					value={props.first_name}
					id="first_name"
					name="first_name"
					type="text"
				/>
				<label htmlFor="Last name">Last name</label>
				<input
					onChange={props.onChange}
					value={props.last_name}
					id="last_name"
					name="last_name"
					type="text"
				/>
				<label htmlFor="Email">Email</label>
				<input
					onChange={props.onChange}
					value={props.email}
					id="email"
					name="email"
					type="email"
				/>
				<label htmlFor="password">Password</label>
				<input
					onChange={props.onChange}
					value={props.password}
					id="password"
					name="password"
					type="password"
				/>
				<label htmlFor="password_confirmation">Password Confirmation</label>
				<input
					onChange={props.onChange}
					value={props.password_confirmation}
					id="password_confirmation"
					name="password_confirmation"
					type="password"
				/>
				{/* <NavLink
					activeStyle={{ fontWeight: "bold" }}
					to='/'><button name="Submit" type="submit">
						Submit
				</button>
				</NavLink> */}
				<button name="Submit" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
} 