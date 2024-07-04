import React from 'react';
import { StepProps } from './interfaces';

const Step3: React.FC<StepProps> = ({ formData, handleChange, handleBlur, errors }) => {
  return (
    <div>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border rounded p-2 w-full"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </label>
    </div>
  );
};

export default Step3;
