import React from 'react';
import { StepProps } from './interfaces';

const Step4: React.FC<StepProps> = ({ formData, handleChange, handleBlur, errors }) => {
  return (
    <div>
      <label>
        Mobile:
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border rounded p-2 w-full"
        />
        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
      </label>
    </div>
  );
};

export default Step4;
