import React from 'react';


const Input = ({
    label='',
    name='',
    type='text',
    className='',
    isRequired=false,
    placeholder=','
}) => {
  return (
    <div className='w-1/2'>
      <label for={name} class="block  text-sm font-medium text-gary-800">{label}</label>
      <input type={type} id={name} class={`"bg-gray-50 bordernborder-gray-300 text-gray-900 text-sm rounded-lg
      focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5" ${className}`} placeholder={placeholder} required={isRequired}></input>
    </div>
  );
}

export default Input;
