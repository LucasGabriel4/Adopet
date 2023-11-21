import React from 'react'



interface InputProps {
    type: string,
    label: string, 
    placeholder: string,
    width: string,
    height: string,
    align?: string,
    colorLabel?: string,  
    bgInput?: string,
    onBlur?: () => void,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    erro?: string | null
}


function Input
   ({type,
    label,
    placeholder, 
    width, 
    height, 
    align = 'center', 
    colorLabel = '#737380', 
    bgInput = '#F6F6F6', 
    onBlur, 
    onChange, 
    value}: InputProps) {
  return (
    <>
    <label className='mb-[8px] mt-[24px] font-semibold block' htmlFor={label} style={{color: colorLabel}}>{label}</label>
     <input 
     type={type} 
     name={label} 
     id={label} 
     placeholder={placeholder} 
     value={value}
     onBlur={onBlur}
     onChange={onChange}
     className={`shadow-[0px_2px_2px_0px_#00000026]  rounded-[6px] outline-none font-normal pl-[16px] z-[1] text-${align}`} 
     style={{width: width, height: height, lineHeight: height, backgroundColor: bgInput}}
     required
     />

         
   
     
    </>
   
  )
}

export default Input
