import Axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { postFormData } from '../../redux/actions/formAction'
import Preloader from '../Preloader/Preloader';
import './ContactForm.css'

const ContactForm = ({ postFormData }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const [isDisabled, setIsDisabled] = useState(false)
    const [preloader, setPreloader] = useState(false)

    const onSubmit = (data, e) => {
        Axios.post('http://localhost:5000/formData', data)
            .then(resData => {
                if (resData.data.success) {
                    setPreloader(true)
                    swal('success', `${resData.data.message}`, 'success')
                    postFormData(data);
                    history.push('/info');
                    setIsDisabled(true)
                    e.target.reset()
                }
            })
            .catch(error => {
                setPreloader(false)
                swal('Error', `${error}`, 'error');
                setIsDisabled(false)
            })
        setPreloader(true)
    };

    return (
        <div className='contact-form-area'>
            {
                preloader && <Preloader />
            }
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
                            <textarea
                                className='form-control mb-3'
                                type="text"
                                placeholder="Message"
                                rows='5'
                                name="message"
                                ref={register({ required: true })}
                            />
                            {errors.message && <p className="text-danger">* This field is required</p>}
                            <input
                                type="submit"
                                className="btn btn-success border rounded-pill px-5 py-3 d-block mx-auto"
                                value='Submit'
                                disabled={isDisabled}
                            />
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default connect(null, { postFormData })(ContactForm);