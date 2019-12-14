import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

// Styles
import {
  Logo,
  Aside,
  Content,
} from './styles';

// Components
import Paginator from "components/Paginator";
import Main from 'components/Main';
import CardMovie from './components/CardMovie';

// Lib
import { getImage } from "lib/image";

// Modules
import { requestMovies } from 'store/modules/movies/actions';
import Loading from "../../components/Loading";


export default function Movies() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const movies = useSelector(state => state?.movies?.data);
  const totalPages = useSelector(state => state?.movies?.meta?.total_pages);
  const loading = useSelector(state => state?.movies?.loading);

  useEffect(() => {
    dispatch(requestMovies({ page: currentPage }));
  }, [currentPage]);

  function changePage({ selected }) {
    const page = selected + 1;
    setCurrentPage(page);
  }

  return (
    <Main>
      <Aside>
        <Logo />
      </Aside>
      <Content>
        <Paginator
          pageCount={totalPages}
          onPageChange={changePage}
          forcePage={currentPage - 1}
        />
        {loading ? (
          <Loading isVisible={loading} />
        ) : (
          movies && movies.map((movie, index) => (
            <CardMovie
              key={`card-movie-${index}`}
              title={movie.title}
              releaseDate={movie.release_date}
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
              image={getImage(movie.poster_path)}
            />
          ))
        )}
        <Paginator
          pageCount={totalPages}
          onPageChange={changePage}
          forcePage={currentPage - 1}
        />
      </Content>
    </Main>
  )
}
