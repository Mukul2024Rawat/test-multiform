import React from 'react';
import { StepProps } from './interfaces';

const Step5: React.FC<StepProps> = ({ formData, handleChange, handleBlur, errors }) => {
  return (
    <div>
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border rounded p-2 w-full"
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
      </label>
    </div>
  );
};

export default Step5;
