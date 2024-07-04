import React from 'react';
import { StepProps } from './interfaces';

const Step2: React.FC<StepProps> = ({ formData, handleChange, handleBlur, errors }) => {
  return (
    <div>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border rounded p-2 w-full"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </label>
    </div>
  );
};

export default Step2;
