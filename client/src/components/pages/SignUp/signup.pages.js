import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth } from '../../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
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

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true) //prevents user clicking signup mutliple times and creating duplicate accounts
            await signup(emailRef.current.value, passwordRef.current.value)
            history.pushState('/')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
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
                    <Form.Group id='password-confirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button disabled={loading} className='w-100' type='submit'>
                        Sign Up
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
           Already have an account? <Link to='login'>Login</Link>
        </div>
        </>
    )
}

//button={loaidng} we do not want to be able to resubmit our form
//curentuser starts off at null then sets itself, firebase sets local storage
//and tokens so we can verify if we have a user already signed in
//itll connect user for us using onauthstatechange
//test current user {currentUser && currentUser.email} and     const {signup, currentUser} = useAuth()
