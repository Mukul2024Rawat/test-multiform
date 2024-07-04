"use client"
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import axios from 'axios';
import { FormData, FormErrors } from './interfaces';

const MultistepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    mobile: '',
    age: '',
    pincode: ''
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    password: '',
    mobile: '',
    age: '',
    pincode: ''
  });

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (validateStep()) {
      try {
        // Save to local storage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Send data to API
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
        console.log('Form submitted successfully:', response.data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Reset error for the field
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.length < 3) error = 'Name cannot be less than 3 characters';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = 'Invalid email format';
        break;
      case 'password':
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(value)) error = 'Password must be at least 8 characters, and include an uppercase letter, a number, and a symbol';
        break;
      case 'mobile':
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(value)) error = 'Mobile number must be 10 digits';
        break;
      case 'age':
        if (!value) error = 'Age is required';
        break;
      case 'pincode':
        const pincodeRegex = /^\d{6}$/;
        if (!pincodeRegex.test(value)) error = 'Pincode must be 6 digits';
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    return error === '';
  };

  const validateStep = () => {
    const currentStepFields = Object.keys(formData).slice((step - 1), step);
    let isValid = true;
    currentStepFields.forEach(field => {
      if (!validateField(field, formData[field as keyof FormData])) {
        isValid = false;
      }
    });
    return isValid;
  };

  const steps = [
    <Step1 key="step1" formData={formData} handleChange={handleChange} handleBlur={handleBlur} errors={errors} />,
    <Step2 key="step2" formData={formData} handleChange={handleChange} handleBlur={handleBlur} errors={errors} />,
    <Step3 key="step3" formData={formData} handleChange={handleChange} handleBlur={handleBlur} errors={errors} />,
    <Step4 key="step4" formData={formData} handleChange={handleChange} handleBlur={handleBlur} errors={errors} />,
    <Step5 key="step5" formData={formData} handleChange={handleChange} handleBlur={handleBlur} errors={errors} />,
    <Step6 key="step6" formData={formData} handleChange={handleChange} handleBlur={handleBlur} errors={errors} />
  ];

  return (
    <div className="max-w-md mx-auto my-10 p-5 border rounded-lg shadow-lg">
      <form>
        {steps[step - 1]}
        <div className="mt-5 flex justify-between">
          {step > 1 && (
            <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleBack}>
              Back
            </button>
          )}
          {step < steps.length && (
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleNext}
            >
              Next
            </button>
          )}
          {step === steps.length && (
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultistepForm;
