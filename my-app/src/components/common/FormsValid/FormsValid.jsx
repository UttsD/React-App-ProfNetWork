import React from 'react'
import s from './FormsValid.module.css'

export const FormControl = Element => ({input, meta: {touched, error}, child, element, ...props}) => {
    
    const showError = touched && error;
    return (
        <div className = {s.form_control+ ' ' + (showError ? s.error: "")}>
           <Element  {...input} {...props}></Element>
            {  showError && <span>{error}</span>}
        </div>
    )
}


