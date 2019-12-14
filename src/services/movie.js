import { HTTP, defaultParams } from 'config/http';

class Movie {
  async get(params) {
    try {
      let req = await HTTP.get('movie/upcoming', { params: {
          ...defaultParams,
          ...params
        }
      });

      return req.data;
    } catch (err) {
      return { message: 'Não foi possível carregar os filmes' };
    }
  }

  async getById(id, params) {
    try {
      let req = await HTTP.get(`movie/${id}`, { params: {
          ...defaultParams,
        ...params
      } });

      return req.data;
    }  catch (err) {
      return { message: 'Não foi possível carregar o filme'}
    }
  }

  async searchMovie(search, params) {
    try {
      let req = await HTTP.get('search/movie', { params: {
          ...defaultParams,
        ...params,
        query: search.replace(' ', '+')
      }});

      return req.data;
    } catch  (err) {
      return { message: 'Não foi encontrado nenhum filme com esse nome' };
    }
  }
}

export default new Movie();
