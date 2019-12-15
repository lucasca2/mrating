import React from 'react';

// Styles
import {
  Wrapper,
  Label
} from './styles';

export default function Field({
  children,
  label,
  ...props
}) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {children}
    </Wrapper>
  )
}
