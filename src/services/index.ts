import axios from "axios";
import { IMovie, IMovieResult } from "../interfaces/interface";

export default class getMovie {
   static async getAllBySearch(search: string, currentPage: number) {
      const response = await axios.get<{
         Search: IMovie[];
         totalResults: string;
         Response: boolean;
      }>(
         `https://omdbapi.com/?s=${search}&apikey=3140da31&page=${currentPage}`
      );
      if (search) {
         return response.data.Search;
      }
   };

   static async getMovieById(movieId: string) {
      const response = await axios.get<IMovieResult>(
         `http://www.omdbapi.com/?i=${movieId}&apikey=3140da31`
      );
      if (movieId) {
         return [response.data];
      }
   }
}