import React, { useState, useContext } from 'react'

import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_EMAIL,
	VALIDATOR_REQUIRE,
} from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'
import { AuthContext } from '../../shared/context/auth-context'

import './Auth.css'

const Auth = () => {
	const auth = useContext(AuthContext)
	const [isLoginMode, setIsLoginMode] = useState(true)
	const [formState, inputHandler, setFormData] = useForm({
		email: {
			value: '',
			valid: false,
		},
		password: {
			value: '',
			inValid: false,
		},
	})

	const switchModeHandler = () => {
		if (!isLoginMode) {
			setFormData(
				{ ...formState.inputs, name: undefined },
				formState.inputs.email.isValid && formState.inputs.password.isValid
			)
		} else {
			setFormData(
				{
					...formState.inputs,
					name: {
						value: '',
						isvalid: false,
					},
				},
				false
			)
		}
		setIsLoginMode((prevMode) => !prevMode)
	}

	const authSubmitHadler = (e) => {
		e.preventDefault()
		console.log(formState.inputs)
		auth.login()
	}

	return (
		<Card className='authentication'>
			<h2>Login Required</h2>
			<hr />
			<form onSubmit={authSubmitHadler}>
				{!isLoginMode && (
					<Input
						element='input'
						id='name'
						type='text'
						label='Your Name'
						validators={[VALIDATOR_REQUIRE()]}
						errorText='Please enter a name'
						onInput={inputHandler}
					/>
				)}
				<Input
					element='input'
					id='email'
					type='email'
					label='E-Mail'
					validators={[VALIDATOR_EMAIL()]}
					errorText='Please enter a valid email address'
					onInput={inputHandler}
				/>
				<Input
					element='input'
					id='password'
					type='password'
					label='Password'
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText='Please enter a valid password'
					onInput={inputHandler}
				/>
				<Button type='submit' disabled={!formState.isValid}>
					{isLoginMode ? 'LOGIN' : 'SIGNUP'}
				</Button>
			</form>
			<Button inverse onClick={switchModeHandler}>
				SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
			</Button>
		</Card>
	)
}

export default Auth
