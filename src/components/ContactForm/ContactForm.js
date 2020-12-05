import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [error, setError] = useState(false)

    const onSubmit = (data, e) => {
        if (data.password === data.conPassword) {
            setError(false)
            fetch()
            e.target.reset()
        } else {
            setError(true)
        }
        
    };

    return (
        <div className='contact-form'>
            <div className='row d-flex justify-content-center m-0'>
                <div className="col-md-4 card card-body mt-5 py-4 px-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="form-header text-center">Contact Form</h3>
                        <input
                            type="text"
                            className='form-control mb-3 mt-4'
                            placeholder="First name"
                            name="fName"
                            ref={register({ required: true, maxLength: 80 })}
                        />
                        {errors.fName && <p className="text-danger">* This field is required</p>}
                        <input
                            type="text"
                            className='form-control mb-3'
                            placeholder="Last name"
                            name="lName"
                            ref={register({ required: true, maxLength: 100 })}
                        />
                        {errors.lName && <p className="text-danger">* This field is required</p>}
                        <input
                            className='form-control mb-3'
                            type="text"
                            placeholder="Email"
                            name="email"
                            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && <p className="text-danger">* Enter Valid Email Address</p>}
                        <input
                            className='form-control mb-3'
                            type="tel"
                            placeholder="Mobile number"
                            name="phNum"
                            ref={register({ required: true, minLength: 6, maxLength: 12 })}
                        />
                        {errors.phNum && <p className="text-danger">* This field is required</p>}
                        <input
                            className='form-control mb-3'
                            type="password"
                            placeholder="Password"
                            name="password"
                            ref={register({ required: true })}
                        />
                        {errors.password && <p className="text-danger">* This field is required</p>}
                        <input
                            className='form-control mb-3'
                            type="password"
                            placeholder="Confirm Password"
                            name='conPassword' ref={register({ required: true })}
                        />
                        {errors.conPassword && <p className="text-danger">* This field is required</p>}
                        {error && <p className="text-danger">Your password doesn't match</p>}
                        <input
                            type="submit"
                            className="btn btn-primary px-5 d-block mx-auto"
                            value='Submit'
                        />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default ContactForm;