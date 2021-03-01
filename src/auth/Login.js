import React, {Fragment} from 'react'
import {useForm} from 'react-hook-form'
import './authStyles/authStyles.css'

function Login() {
    const { watch, 
        register,
        handleSubmit, 
        getValues, 
        formState:{errors, isValid}} = useForm({mode: 'all'})

    const loginWithThisForm = () =>{
            console.log(JSON.stringify(watch(), null, 2))
        }

    return (
        <Fragment>
            <h1>Log In Form</h1>
            <form onSubmit={handleSubmit(loginWithThisForm)}>
                <div className="">
                    <label htmlFor="loginEmail">Email</label>
                    <input 
                        name="loginEmail"
                        type="email"
                        id="loginEmail"
                        ref={
                            register({
                                required:({
                                    value: true,
                                    message: "Email is Required"
                                })
                            })
                        }
                        />
                    {errors.loginEmail && <p>{errors.loginEmail.message}</p>}
                </div>
                <div className="">
                    <label htmlFor="loginPassword">Password</label>
                    <input 
                        name="loginPassword"
                        type="password"
                        id="loginPassword"
                        ref={register({
                            required:{
                                value: true,
                                message: "Password is Required"
                            }
                        })} 
                        />
                    {errors.loginPassword && <p>{errors.loginPassword.message}</p>}
                </div>
                <button disabled={!isValid} type="submit">Sign In</button>
            </form>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </Fragment>
    )
}

export default Login
