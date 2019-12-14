import React from 'react';

// Components
import Rating from 'components/Rating';

// Styles
import {
  Wrapper,
  WrapperImage,
  Image,
  Content,
  Title,
  Info,
} from './styles';


export default function CardMovie({
  title,
  releaseDate,
  voteAverage,
  voteCount,
  image,
  ...props
}) {
  return (
    <Wrapper {...props}>
      <WrapperImage>
        <Image src={image} />
      </WrapperImage>
      <Content>
        <Rating rating={voteAverage} />
        <Title>{title}</Title>
        <Info>Lançamento: {releaseDate}</Info>
        <Info>Avaliações: {voteCount}</Info>
      </Content>
    </Wrapper>
  )
}
