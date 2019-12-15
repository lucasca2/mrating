import React from 'react';

// Components
import Field from 'components/Form/Field';

// Styles
import {
  BaseInput
} from './styles';

export default function Input({
  label,
  value,
  onChange,
  ...props
}) {
  function handleOnChange(e) {
    if(onChange) onChange(e.target.value);
  }

  return (
    <Field
      label={label}
    >
      <BaseInput
        {...props}
        value={value}
        onChange={handleOnChange}
      />
    </Field>
  )
}
