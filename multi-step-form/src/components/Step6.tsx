import React from 'react';
import { StepProps } from './interfaces';

const Step6: React.FC<StepProps> = ({ formData, handleChange, handleBlur, errors }) => {
  return (
    <div>
      <label>
        Pincode:
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border rounded p-2 w-full"
        />
        {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
      </label>
    </div>
  );
};

export default Step6;
