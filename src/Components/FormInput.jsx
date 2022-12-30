import { useState } from 'react';
import './formInput.scss';

const FormInput = props => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = e => {
    setFocused(true);
  };

  return (
    <div className='formInput'>
      <label className='form-label'>{label}</label>
      <input
        className='form-input'
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        // onFocus={() => setFocused(true)}
        focused={focused.toString()}
      />
      <span className='form-error'>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
