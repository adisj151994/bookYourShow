using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EntityLayer;
using DataLayer;

namespace BusinessLayer
{
     public class BusinessClass
    {
        CrudOperations objCrudOperations = new CrudOperations();
        public List<Movies> GetMovies()
        {
            return objCrudOperations.GetMovies();
        }

        public List<TheatreScreenMapping> GetTheatreScreenMapping()
        {
            return objCrudOperations.GetTheatreScreenMapping();
        }

        public List<MovieTheatreMapping> GetMovieTheatreMapping()
        {
            return objCrudOperations.GetMovieTheatreMapping();
        }

        public string postMovieTheatreMapping(MovieTheatreMapping objMovieTheatreMapping)
        {
            return objCrudOperations.PostMovieTheatreMapping(objMovieTheatreMapping);
        }

        public string PostDynSeatMatrix(MovieTheatreMapping objMovieTheatreMapping)
        {
            return objCrudOperations.PostMovieTheatreMapping(objMovieTheatreMapping);
        }

        public List<Movies> GetActiveMovies()
        {
            return objCrudOperations.GetActiveMovies();
        }

        public List<MovieTheatreMapping> GetTheatresForMovie(int movieID)
        {
            return objCrudOperations.GetTheatresForMovie(movieID);
        }
    }
}
