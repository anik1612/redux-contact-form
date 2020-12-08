import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Information = ({ data }) => {

    return (
        <div className="show-input-info">
            <div className='row'>
                <div className='col-md-4 offset-md-4 mt-5'>
                    <div className='card card-body bg-white'>
                        <h3 className='text-center mb-5 bg-success py-3 text-white border rounded'>Your Information</h3>
                        <h5 className='mb-3'>First Name: {data.fName}</h5>
                        <h5 className='mb-3'>Last Name: {data.lName}</h5>
                        <h5 className='mb-3'>Email: {data.email}</h5>
                        <h5 className='mb-3'>Phone Num: {data.phNum}</h5>
                        <h5 className='mb-3'>Message: {data.message}</h5>
                        <Link to='/' className='btn btn-dark text-white mt-3'>Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps)(Information);