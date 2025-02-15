import React from 'react';
import ConfirmAccountForm from './_form-confirm-account';

const  ConfirmAccountPage = () => {
    return (
        <div className="h-full w-full flex items-center justify-center bg-gray-100">
            <div className="h-full w-full flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Input Confirm Account Code</h1>
                <div className="text-left bg-white p-6 rounded-lg shadow-md  mx-auto">
                    <ConfirmAccountForm/>
                </div>
            </div>
        </div>
    );
};

export default ConfirmAccountPage;