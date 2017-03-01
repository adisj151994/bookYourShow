using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EntityLayer;
using BusinessLayer;

namespace ServiceLayer.Controllers
{
    [RoutePrefix("api")]
    public class ServiceController : ApiController
    {
        BusinessClass objBusinessClass = new BusinessClass();
        [Route("getMovies")]
        [HttpGet]
        [AllowAnonymous]
        public List<Movies> getMovies()
        {
            return objBusinessClass.GetMovies();
        }

        [Route("getTheatreScreenMapping")]
        [HttpGet]
        [AllowAnonymous]
        public List<TheatreScreenMapping> getTheatreScreenMapping()
        {
            return objBusinessClass.GetTheatreScreenMapping();
        }

        [Route("getMovieTheatreMapping")]
        [HttpGet]
        [AllowAnonymous]
        public List<MovieTheatreMapping> getMovieTheatreMapping()
        {
            return objBusinessClass.GetMovieTheatreMapping();
        }

        [Route("postMovieTheatreMapping")]
        [HttpPost]
        [AllowAnonymous]
        public string postMovieTheatreMapping([FromBody]MovieTheatreMapping objMovieTheatreMapping)
        {
            return objBusinessClass.postMovieTheatreMapping(objMovieTheatreMapping);
        }

        [Route("postDynSeatMatrix")]
        [HttpPost]
        [AllowAnonymous]
        public string PostDynSeatMatrix([FromBody]MovieTheatreMapping objMovieTheatreMapping)
        {
            return objBusinessClass.PostDynSeatMatrix(objMovieTheatreMapping);
        }


        [Route("getActiveMovies")]
        [HttpGet]
        [AllowAnonymous]
        public List<Movies> getActiveMovies()
        {
            return objBusinessClass.GetActiveMovies();
        }

        [Route("getTheatresForMovie")]
        [HttpGet]
        [AllowAnonymous]
        public List<MovieTheatreMapping> getTheatresForMovie([FromUri]int movieID)
        {
            return objBusinessClass.GetTheatresForMovie(movieID);
        }
    }
}
