import React from 'react';
import { StepProps } from './interfaces';

const Step1: React.FC<StepProps> = ({ formData, handleChange, handleBlur, errors }) => {
  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border rounded p-2 w-full"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </label>
    </div>
  );
};

export default Step1;
