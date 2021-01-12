import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth } from '../../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
//use histroy to redirect/navigate to dashboard after logged in or signedup
export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
//were not loading my default so loading set to false
    //use state emepty string because no error by default
//preventdefault prevents our app from refreshing
//if passwords do not match we do not complete the rest of the function and returns to origin state
//we use async function we wait for sign up to complete if theres an error it will tell user and if not sign up successfulk
    async function handleSubmit(event) {
        event.preventDefault()

        

        try {
            setError('')
            setLoading(true) //prevents user clicking signup mutliple times and creating duplicate accounts
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard') //put url for dashboard in here
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Login</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} className='w-100' type='submit'>
                        Login
                    </Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <Link to='/forgot-password'>Forgot password?</Link>
                </div>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
           Need an account? <Link to='/sign-up'>Sign Up</Link>
        </div>
        </>
    )
}

//button={loaidng} we do not want to be able to resubmit our form
//curentuser starts off at null then sets itself, firebase sets local storage
//and tokens so we can verify if we have a user already signed in
//itll connect user for us using onauthstatechange
//test current user {currentUser && currentUser.email} and     const {signup, currentUser} = useAuth()
