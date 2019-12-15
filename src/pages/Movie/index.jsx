import React, { useEffect, useState } from 'react';
import history from 'services/history';
import { useDispatch, useSelector } from "react-redux";
import { MdArrowBack } from "react-icons/all";

// Styles
import {
  ButtonGoBack,
  Aside,
  Content,
} from './styles';

// Components
import Paginator from "components/Paginator";
import Main from 'components/Main';
import Input from 'components/Form/Input';
import CardMovie from './components/CardMovie';

// Lib
import { getImage } from "lib/image";

// Modules
import { requestMovie } from 'store/modules/movie/actions';
import Loading from "../../components/Loading";


export default function Movie({ match }) {
  const dispatch = useDispatch();
  const movie = useSelector(state => state?.movie?.data);
  const loading = useSelector(state => state?.movie?.loading);

  useEffect(() => {
    const { id } = match?.params;

    if(id) {
      dispatch(requestMovie({ id }));
    }
  }, []);


  return (
    <Main>
      <Aside>
        <ButtonGoBack onClick={history.goBack}>
          <MdArrowBack />
        </ButtonGoBack>
      </Aside>
      <Content>
        {loading ? (
          <Loading isVisible={loading} />
        ) : (
          <CardMovie
            to={`/filme/${movie?.id}`}
            title={movie?.title}
            releaseDate={movie?.release_date}
            voteAverage={movie?.vote_average}
            voteCount={movie?.vote_count}
            image={getImage(movie?.poster_path)}
            overview={movie?.overview}
            genres={movie?.genres}
          />
        )}
      </Content>
    </Main>
  )
}
