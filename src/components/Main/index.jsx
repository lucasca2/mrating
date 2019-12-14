import React from 'react';

// Styles
import { Wrapper } from './styles';

export default function Main({ children, ...props }) {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}
