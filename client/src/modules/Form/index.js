import React from 'react'
import Input from '../../components/input'
import Button from '../../components/Button'
import { useState } from 'react'
const Form = ({
  isSignInPage=true ,
}) => {
  const [data, setData] = useState({
    ...(!isSignInPage &&{
      fullName:''
    }),
    email:'',
    password:''
  })

  
  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className='text-4xl font-extrabold'>Welcome {isSignInPage && 'Back'}</div>
        <div className='text-xl font-light mb-14'>{isSignInPage? 'Sign in to get explored':'Sign up  to get started' }</div>

        <form  className="flex flex-col items-center w-full" onSubmit ={()=> console.log("Submitted")}>
        {!isSignInPage && <Input label="Full name" name='name' placeholder='Enter your full name' className='mb-6' value={data.fullName} onChange={(e)=> setData({...data, fullName: e.target.value})}/>}
        <Input label="Email address"  type='email' name='email' placeholder='Enter your email' className='mb-6' value={data.email} onChange={(e)=> setData({...data, email: e.target.value})}/>
        <Input label="Password" type='password' name='password' placeholder='Enter your password' className='mb-14' value={data.password} onChange={(e)=> setData({...data, password: e.target.value})}/>
        <Button label={isSignInPage?'Sign in':'Sign up'} type='submit' className="mb-2"/></form>
        <div>{isSignInPage ? 'Didnot have an account?' :'Already have an account?' }<span className='underline cursor-pointer text-primary'>{isSignInPage?'Sign up':'Sign in'}</span></div>
    </div>
  )
}

export default Form;
