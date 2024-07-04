// interfaces.ts
export interface FormData {
  name: string;
  email: string;
  password: string;
  mobile: string;
  age: string;
  pincode: string;
}

export interface FormErrors {
  name: string;
  email: string;
  password: string;
  mobile: string;
  age: string;
  pincode: string;
}

export interface StepProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: FormErrors;
}
