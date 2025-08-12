import React from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select
            {...props}
            id={id}
            ref={ref}
            className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${className}`}
            >
           {options?.map((option) => (
                <option key={option} value={option}>
                    {option.label}
                </option>
           ))}

            </select>
         </div>
        )
}

export default React.forwardRef(Select);