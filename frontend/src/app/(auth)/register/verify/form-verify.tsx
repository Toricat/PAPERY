"use client";
import React, { useState, Suspense } from 'react';
import { VerifyReq } from '@/schemas/auth.schemas';
import { useRouter } from 'next/navigation';

const VerifyForm = () => {
    const [verify, setverify] = useState<string>('');
    const [errors, setErrors] = useState<{ verify?: string; }>({});
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result =  VerifyReq.safeParse({ verify });

        if (!result.success) {
            
            const errorMessages = result.error.errors.reduce(
                
                (acc, { path, message }) => ({ ...acc, [path[0]]: message }),{}
            );

            setErrors(errorMessages);
        } else {
            setErrors({});
            //TODO
            router.push('/login');
        }
    };
    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
                <label htmlFor="verify" className="text-gray-700 font-semibold">Verify code:</label>
                <input
                    type="verify"
                    id="verify"
                    value={verify}
                    placeholder='Enter your verify code'
                    onChange={(e) => setverify(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.verify && <p className='text-red-500 text-sm mt-1'>{errors.verify}</p>}
            </div>
 
            <div className="flex justify-between items-center mb-2">
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                    Continue
                </button>
            </div>
      
            
        </form>
    );
};


const SuspendedVerifyForm = () => (
    <Suspense fallback={<div className="h-full w-full flex items-center justify-center">Loading...</div>}>
        < VerifyForm/>
    </Suspense>
);
export default SuspendedVerifyForm;