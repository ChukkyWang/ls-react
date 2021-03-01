import React, {useState, Fragment} from 'react'
import {useForm} from 'react-hook-form'
import './authStyles/authStyles.css'



function Create() {
    const [step, setStep] = useState(0)
    const { watch, 
            register,
            handleSubmit, 
            getValues, 
            formState:{errors, isValid}} = useForm({mode: 'all'})
    const nextLevel = () =>{
        setStep(cur => cur + 1)
    }

    const submitThisForm = () =>{
        console.log(JSON.stringify(watch(), null, 2))
    }

     return (
        <Fragment>
            <form onSubmit={handleSubmit(submitThisForm)}>
                <h1>Create Account - Get Started</h1>
                {step >= 0 && (
                <section className={step === 0 ? 'block' : 'hidden'}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email" 
                            id="email"
                            name="email"
                            className={errors.email && 'error__class'}
                            ref={register({
                                required:{
                                    value: true,
                                    message: "Email is Required"
                                }
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="telephone">Phone Number</label>
                        <input
                            type="tel"
                            id="telephone" 
                            name="telephone"
                            className={errors.telephone && 'error__class'}
                            ref={register({
                                required:{
                                    value: true,
                                    message: "Phone Number is Required"
                                }
                            })}                 
                        />
                        {errors.telephone && <p>{errors.telephone.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password" 
                            id="password"
                            name="password"
                            className={errors.password && 'error__class'}
                            ref={register({
                                required:{
                                    value: true,
                                    message: "Password is Required"
                                }
                            })}                        
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <button disabled={!isValid} onClick={nextLevel} type="submit">Create Account</button>
                </section>
                )}
                {step >= 1 && (
                <section className={step === 1 ? 'block' : 'hidden'}>
                    <div>
                        <p>We sent an email to <b>{getValues("email")}</b></p>
                    </div>
                </section>
                )}
            </form>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </Fragment>
    )
}

export default Create
