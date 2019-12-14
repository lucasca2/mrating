import React from 'react';

// Styles
import {
  Logo,
  Aside,
  Content,
} from './styles';

// Components
import Main from 'components/Main';
import CardMovie from './components/CardMovie';

// Lib
import { getImage } from "lib/image";

import { FakeMovies } from './data';


export default function Movies() {
  return (
    <Main>
      <Aside>
        <Logo />
      </Aside>
      <Content>
        {FakeMovies.map((movie, index) => (
          <CardMovie
            key={`card-movie-${index}`}
            title={movie.title}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
            image={getImage(movie.poster_path)}
          />
        ))}
      </Content>
    </Main>
  )
}
