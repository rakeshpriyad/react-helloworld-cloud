import React from 'react'
import { Field } from 'redux-form';
import { FormLabel } from '../FormLabel';
import '../../../App.css';
import { renderField } from '../FormInputField'
import validateAndSubmit from './UserFormValidation';

const AddUserFormGenerator = (props) => {
    //const { asyncValidating, handleSubmit, submitUserAction, submitLoadUserAction, pristine, submitting, reset, user } = props;
	//<form onSubmit={handleSubmit(fields => props.save(fields))} id='form1' className='mLabForm'>
    const { handleSubmit } = props;
    return (<form onSubmit={handleSubmit(fields => validateAndSubmit(fields, props.save))} id='form1' className='mLabForm'>
        <div className='form-row'>
            <FormLabel labelName={'firstName'} fieldName={'First Name'} isRequire={true} />
            <Field component={renderField} type='text' placeholder='First Name' name='firstName' id='firstName' />
        </div>
        <div className='form-row'>
            <FormLabel labelName={'LastName'} fieldName={'Last Name'} isRequire={true} />
            <Field component={renderField} type='text' placeholder='Last Name' name='lastName' id='lastName' />
        </div>

        <div className='form-row'>
            <FormLabel labelName={'Email Address'} fieldName={'Email'} isRequire={true} />
            <Field component={renderField} type='email' placeholder='abcdef@mlab.com' name='email' id='email' />
        </div>
        <div className='form-row'>
            <FormLabel labelName={'phoneNo'} fieldName={'Mobile No'} isRequire={true} />
            <Field component={renderField} type='number' placeholder='0800000000' name='phoneNo' id='phoneNo' />
        </div>
        
        <div className={`submitBtn u-mt30 u-mb80`}>
            <button type="submit">Submit</button>
        </div>
    </form>)
}

export default AddUserFormGenerator;
