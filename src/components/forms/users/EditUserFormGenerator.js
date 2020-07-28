import React from 'react'
import { Field } from 'redux-form';
import {FormLabel} from '../FormLabel';
import '../../../App.css';
import { renderField } from '../FormInputField'
import validateAndSubmit from './UserFormValidation';

const EditUserFormGenerator = (props) => {
    const {handleSubmit, edit} = props;
	//<form onSubmit={handleSubmit(fields => edit(fields))} id='form1' className='mLabForm'>
    return (<form onSubmit={handleSubmit(fields => validateAndSubmit(fields, props.edit))} id='form1' className='mLabForm'>
	
            <div className='form-row'>
                <FormLabel labelName={'UserID'} fieldName={'User ID'} isRequire={true} />
                <Field component={renderField} type='text' placeholder='User Id' name='id' id='id' />
            </div>
            <div className='form-row'>
                <FormLabel labelName={'firstName'} fieldName={'First Name'} isRequire={true} />
                <Field component={renderField} type='text' placeholder='First Name' name='firstName' id='firstName' />
            </div>
            <div className='form-row'>
                <FormLabel labelName={'lastName'} fieldName={'Last Name'} isRequire={true} />
                <Field component={renderField} type='text' placeholder='Last Name' name='lastName' id='lastName' />
            </div>
            
            <div className='form-row'>
                <FormLabel labelName={'email'} fieldName={'Email Address'} isRequire={true} />
                <Field component={renderField} type='email' placeholder='abcdef@mlab.com' name='email' id='email' />
            </div>
            <div className='form-row'>
                <FormLabel labelName={'phoneNo'} fieldName={'Mobile No'} isRequire={false} />
                <Field component={renderField} type='number' placeholder='0800000000' name='phoneNo' id='phoneNo' />
            </div>
            
            <div className={`submitBtn u-mt30 u-mb80`}>
                <button type="submit">Submit</button>
            </div>
            </form>)
}

export default EditUserFormGenerator;
