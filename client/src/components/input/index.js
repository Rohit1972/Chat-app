import React from 'react';


const Input = ({
    label='',
    name='',
    type='text',
    className='',
    inputClassName='',
    isRequired=true,
    placeholder='',
    value ='',
    onChange=()=>{},
}) => {
  return (
    <div className={` ${className}`}>
      <label for={name} class="block  text-sm font-medium text-gray-800">{label}</label>
      <input type={type} id={name} class={`bg-gray-100 border-gray-300 text-gray-900 text-sm rounded-lg
      focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5 ${inputClassName}`} placeholder={placeholder} required={isRequired} value={value} onChange={onChange}></input>
    </div>
  );
}

export default Input;
