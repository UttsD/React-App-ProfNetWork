import { Field } from "redux-form"
import React from 'react';

export const createMyField = (placeholder, name, component, validators, label='', props={}, ) => {
   return (
    <label for="">
    {label}
   <Field type="text" name={name} component={component} placeholder = {placeholder} validate = {validators} {...props}></Field>
   </label>
   )
}

