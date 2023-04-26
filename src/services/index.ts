
import { IMovie, IMovieResult } from "../interfaces/interface";

// export default class getMovie {
//    static async getAllBySearch(search: string) {
//       const response = await axios.get<{
//          Search: IMovie[];
//       }>(
         // `https://omdbapi.com/?s=${search}&apikey=3140da31&page=1`
//       );
//       if (response.data.Search) {
//          return response.data.Search;
//       }
//    };

//    static async getMovieById(movieId: string) {
//       const response = await axios.get<IMovieResult>(
//          `http://www.omdbapi.com/?i=${movieId}&apikey=3140da31`
//       );
//       if (movieId) {
//          return [response.data];
//       }
//    }
// }

export default class getMovie {
   // static async getAllBySearch( ) {
   //    const response = await axios.get<{
   //       Search: IMovie[];
   //       totalResults: string;
   //       Response: boolean;
   //    }>(
   //       `https://omdbapi.com/?s=spider&apikey=3140da31&page=1`
   //    );
   //    if (response.data.Search) {
   //       return response.data.Search;
   //    }
   // };

   // static async getMovieById(movieId: string) {
   //    const response = await axios.get<IMovieResult>(
   //       `http://www.omdbapi.com/?i=${movieId}&apikey=3140da31`
   //    );
   //    if (movieId) {
   //       return [response.data];
   //    }
   // }
}
// async function getMovie(search: string) {
//    const URL = `https://omdbapi.com/?s=${search}&apikey=3140da31&page=1`;
//    const res = await fetch(`${URL}`);
//    const data = await res.json();

//    if (data.Search)
//       return data.Search
// }
