import React from 'react'
import { useId } from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
},ref){
    const useId = useId();
    return (
        <div className='w-full'>
            {label && <label 
            className='text-sm font-medium text-gray-700 mb-2' 
            htmlFor={useId()}>
                {label}
            </label>
            }
            <input 
            type={type}
            className={`${className}`}
            ref={ref}
            {...props}
            />
        </div>
    ) 
}) 

export default Input