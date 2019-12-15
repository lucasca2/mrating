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
  Overview,
  WrapperGenres,
  Genres
} from './styles';


export default function CardMovie({
  title,
  releaseDate,
  voteAverage,
  voteCount,
  image,
  overview,
  genres,
  ...props
}) {
  return (
    <Wrapper {...props}>
        <WrapperImage>
          <Image src={image} />
        </WrapperImage>
        <Content>
          <Rating style={{ justifyContent: 'flex-start' }} rating={voteAverage} />
          <Info>Avaliações: {voteCount}</Info>
          <Info>Lançamento: {releaseDate}</Info>
          <Title>{title}</Title>
          <Overview>{overview}</Overview>
        </Content>
        <WrapperGenres>
          {genres?.map((genre, index) => (
            <Genres>{genre.name}</Genres>
          ))}
        </WrapperGenres>
    </Wrapper>
  )
}
