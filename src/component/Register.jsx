import { Field,Formik,Form } from 'formik';
import React from 'react'
import './register.css'

function Register() {
    function validateForm(e){

    }
    function isValidEmail(email){

    }
  return (
    <>
    <div className="form bg-white mt-[100px] w-[500px] h-[500px] p-[20px] drop-shadow-xl">
        <h2 className='mt-5 text-3xl font-bold text-center'>Register New User</h2>
        <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                userName:'',
                passWord:'',
                confirmpassWord:'',
            }}
            onSubmit={(formsData, {setSubmitting, resetForm})=>{
                alert(JSON.stringify(formsData));
                setSubmitting(false);
                resetForm();
            }}
        >
        <Form className='text-xl mx-6 mt-12'>
            <div className='my-6'>
                <label className='flex justify-between'>
                    Firstname <Field id="firstName" name="firstName" className="drop-shadow"/>
                </label>
            </div>
            <div className='my-6'>
                <label className='flex justify-between'>
                    Lastname <Field id="lastName" name="lastName" className="drop-shadow"/>
                </label>
            </div>
            <div className='my-6'>
                <label className='flex justify-between'>
                    Username <Field id="userName" name="userName" className="drop-shadow"/>
                </label>
            </div>
            <div className='my-6'>
                <label className='flex justify-between'>
                    Password <Field id="passWord" name="passWord"className="drop-shadow"/>
                </label>
            </div>
            <div className='my-6'>
                <label className='flex justify-between'>
                    Confirmed Password <Field id="confirmpassWord" name="confirmpassWord" className="drop-shadow" />
                </label>
            </div>
            <div className='mt-10 flex justify-center font-bold '>
                <button type='submit' className='btn btn-primary shadow-xl py-2 px-8 bg-pink-400 text-white'>
                    Submit
                </button>
            </div>
        </Form>
        </Formik>
        
    </div>
    </>
  )
}

export default Register