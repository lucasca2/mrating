import React from 'react';

import { Wrapper, Loader, Circle } from './styles';

export default function Loading({
  isVisible
}) {

  if(!isVisible) return null;

  return (
    <Wrapper>
      <Loader>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </Loader>
    </Wrapper>
  )
}
