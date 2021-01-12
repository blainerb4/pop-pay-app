import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth } from '../../../contexts/AuthContext'
import { Link } from 'react-router-dom'
//use histroy to redirect/navigate to dashboard after logged in or signedup

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
//were not loading my default so loading set to false
    //use state emepty string because no error by default
//preventdefault prevents our app from refreshing
//if passwords do not match we do not complete the rest of the function and returns to origin state
//we use async function we wait for sign up to complete if theres an error it will tell user and if not sign up successfulk
    async function handleSubmit(event) {
        event.preventDefault()

        

        try {
            setMessage('')
            setError('')
            setLoading(true) //prevents user clicking signup mutliple times and creating duplicate accounts
        //    await login(emailRef.current.value, passwordRef.current.value)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className='text-center mb-4'>Password Reset</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className='w-100' type='submit'>
                        Reset Password
                    </Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <Link to='/login'>Login</Link>
                </div>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
           Need an account? <Link to='/sign-up'>Sign Up</Link>
        </div>
        </>
    )
}
