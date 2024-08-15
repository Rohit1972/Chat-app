import React from 'react'
import Input from '../../components/input'
import Button from '../../components/Button'
const Form = ({
  isSignInPage=true,
}) => {
  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className='text-4xl font-extrabold'>Welcome {isSignInPage && 'Back'}</div>
        <div className='text-xl font-light mb-14'>{isSignInPage? 'Sign in to get explored':'Sign up  to get started' }</div>
        {!isSignInPage && <Input label="Full name" name='name' placeholder='Enter your full name' className='mb-6'/>}
        <Input label="Email address" name='email' placeholder='Enter your email' className='mb-6'/>
        <Input label="Password" type='password' name='password' placeholder='Enter your password' className='mb-14'/>
        <Button label={isSignInPage?'Sign in':'Sign up'} className="mb-2"/>
        <div>{isSignInPage ? 'Didnot have an account?' :'Already have an account?' }<span className='underline cursor-pointer text-primary'>{isSignInPage?'Sign up':'Sign in'}</span></div>
    </div>
  )
}

export default Form;
