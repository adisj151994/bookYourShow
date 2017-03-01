using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EntityLayer;

namespace DataLayer
{
    public class CrudOperations
    {
        SqlConnection con = new SqlConnection(@"Data Source=DESKTOP-PFA0L7A\SQLEXPRESS;Initial Catalog=bookYourShowDB;Integrated Security=True");

        public List<Movies> GetMovies()
        {
            Movies objMovies;
            List<Movies> lstMovies = new List<Movies>();
            SqlCommand cmdGetMovies = new SqlCommand("SELECT * FROM Movies",con);
            con.Open();
            SqlDataReader rdrGetEmployes = cmdGetMovies.ExecuteReader();
            while(rdrGetEmployes.Read())
            {
                objMovies = new Movies();
                objMovies.movieID = Convert.ToInt32(rdrGetEmployes[0]); 
                objMovies.movieName = Convert.ToString(rdrGetEmployes[1]);
                objMovies.movieDuration = Convert.ToInt32(rdrGetEmployes[2]);
                objMovies.movieGenre = Convert.ToString(rdrGetEmployes[3]);
                objMovies.movieRated = Convert.ToString(rdrGetEmployes[4]);
                objMovies.movieRatings = Convert.ToDouble(rdrGetEmployes[5]);
                objMovies.movieDescription = Convert.ToString(rdrGetEmployes[6]);
                lstMovies.Add(objMovies);
            }
            return lstMovies;
        }

        public List<MovieTheatreMapping> GetTheatresForMovie(int movieID)
        {
            int m1 = Convert.ToInt32(movieID);
            MovieTheatreMapping objMovieTheatreMapping;
            List<MovieTheatreMapping> lstMovieTheatreMapping = new List<MovieTheatreMapping>();
            SqlCommand cmdGetMovieTheatreMapping = new SqlCommand("SELECT * FROM MovieTheatreMapping mtm join movies m on m.movieID = mtm.movieID join theatrescreenmapping tsm on tsm.theatrescreenmappingid = mtm.theatrescreenmappingid join theatres t on t.theatreid = tsm.theatreid where mtm.movieid = @movieID", con);
            cmdGetMovieTheatreMapping.Parameters.AddWithValue("@movieID", movieID);
            con.Open();
            SqlDataReader rdrGetMovieTheatreMapping = cmdGetMovieTheatreMapping.ExecuteReader();
            while (rdrGetMovieTheatreMapping.Read())
            {
                
                objMovieTheatreMapping = new MovieTheatreMapping();
                
                objMovieTheatreMapping.movieTheatreMappingID = Convert.ToInt32(rdrGetMovieTheatreMapping[0]);
                objMovieTheatreMapping.objMovies = new Movies()
                {
                    movieID = Convert.ToInt32(rdrGetMovieTheatreMapping[1]),
                    movieName = Convert.ToString(rdrGetMovieTheatreMapping[6]),
                    movieDuration = Convert.ToInt32(rdrGetMovieTheatreMapping[7]),
                    movieGenre = Convert.ToString(rdrGetMovieTheatreMapping[8]),
                    movieRated = Convert.ToString(rdrGetMovieTheatreMapping[9]),
                    movieRatings = Convert.ToDouble(rdrGetMovieTheatreMapping[10]),
                    movieDescription = Convert.ToString(rdrGetMovieTheatreMapping[11]),
                };
                objMovieTheatreMapping.objTheatreScreenMappind = new TheatreScreenMapping()
                {
                    theatreScreenMappingID = Convert.ToInt32(rdrGetMovieTheatreMapping[2]),
                    objTheatre = new Theatres()
                    {
                        theatreID = Convert.ToInt32(rdrGetMovieTheatreMapping[13]),
                        theatreName = Convert.ToString(rdrGetMovieTheatreMapping[17]),
                        theatreRatings = Convert.ToDouble(rdrGetMovieTheatreMapping[18]),
                        theatreAddress = Convert.ToString(rdrGetMovieTheatreMapping[19]),
                    },
                    screenID = Convert.ToString(rdrGetMovieTheatreMapping[14]),
                    screenMatrix = Convert.ToString(rdrGetMovieTheatreMapping[15]),
                };
                objMovieTheatreMapping.showDate = Convert.ToString(rdrGetMovieTheatreMapping[3]);
                objMovieTheatreMapping.dynSeatMatrix = Convert.ToString(rdrGetMovieTheatreMapping[4]);
                lstMovieTheatreMapping.Add(objMovieTheatreMapping);
            }
            return lstMovieTheatreMapping;
        }

        public List<Movies> GetActiveMovies()
        {
            Movies objMovies;
            List<Movies> lstMovies = new List<Movies>();
            SqlCommand cmdGetMovies = new SqlCommand("SELECT * FROM Movies where movieID in (Select movieID from MovieTheatreMapping ) and movieID <> 0", con);
            con.Open();
            SqlDataReader rdrGetEmployes = cmdGetMovies.ExecuteReader();
            while (rdrGetEmployes.Read())
            {
                objMovies = new Movies();
                objMovies.movieID = Convert.ToInt32(rdrGetEmployes[0]);
                objMovies.movieName = Convert.ToString(rdrGetEmployes[1]);
                objMovies.movieDuration = Convert.ToInt32(rdrGetEmployes[2]);
                objMovies.movieGenre = Convert.ToString(rdrGetEmployes[3]);
                objMovies.movieRated = Convert.ToString(rdrGetEmployes[4]);
                objMovies.movieRatings = Convert.ToDouble(rdrGetEmployes[5]);
                objMovies.movieDescription = Convert.ToString(rdrGetEmployes[6]);
                lstMovies.Add(objMovies);
            }
            return lstMovies;
        }

        public List<TheatreScreenMapping> GetTheatreScreenMapping()
        {
            TheatreScreenMapping objTheatreScreenMapping;
            List<TheatreScreenMapping> lstTheatreScreenMapping = new List<TheatreScreenMapping>();
            SqlCommand cmdGetTheatreScreenMapping = new SqlCommand("SELECT * FROM TheatreScreenMapping", con);
            con.Open();
            SqlDataReader rdrGetTheatreScreenMapping = cmdGetTheatreScreenMapping.ExecuteReader();
            while(rdrGetTheatreScreenMapping.Read())
            {
                objTheatreScreenMapping = new TheatreScreenMapping();
                objTheatreScreenMapping.theatreScreenMappingID = Convert.ToInt32(rdrGetTheatreScreenMapping[0]);
                objTheatreScreenMapping.objTheatre.theatreID = Convert.ToInt32(rdrGetTheatreScreenMapping[1]);
                objTheatreScreenMapping.screenID = Convert.ToString(rdrGetTheatreScreenMapping[2]);
                objTheatreScreenMapping.screenMatrix = Convert.ToString(rdrGetTheatreScreenMapping[3]);
                lstTheatreScreenMapping.Add(objTheatreScreenMapping);
            }
            return lstTheatreScreenMapping;
        }

        public List<MovieTheatreMapping> GetMovieTheatreMapping()
        {
            MovieTheatreMapping objMovieTheatreMapping;
            List<MovieTheatreMapping> lstMovieTheatreMapping = new List<MovieTheatreMapping>();
            SqlCommand cmdGetMovieTheatreMapping = new SqlCommand("SELECT * FROM MovieTheatreMapping MTP JOIN Movies M ON M.movieID = MTP.movieID JOIN theatreScreenMapping TSM ON TSM.theatreScreenMappingID = MTP.theatreScreenMappingID JOIN theatres T ON T.theatreID = TSM.theatreID", con);
            con.Open();
            SqlDataReader rdrGetMovieTheatreMapping = cmdGetMovieTheatreMapping.ExecuteReader();
            while (rdrGetMovieTheatreMapping.Read())
            {
                objMovieTheatreMapping = new MovieTheatreMapping();
                objMovieTheatreMapping.movieTheatreMappingID = Convert.ToInt32(rdrGetMovieTheatreMapping[0]);
                objMovieTheatreMapping.objMovies = new Movies()
                {
                    movieID = Convert.ToInt32(rdrGetMovieTheatreMapping[1]),
                    movieName = Convert.ToString(rdrGetMovieTheatreMapping[6]),
                    movieDuration = Convert.ToInt32(rdrGetMovieTheatreMapping[7]),
                    movieGenre = Convert.ToString(rdrGetMovieTheatreMapping[8]),
                    movieRated = Convert.ToString(rdrGetMovieTheatreMapping[9]),
                    movieRatings = Convert.ToDouble(rdrGetMovieTheatreMapping[10]),
                    movieDescription = Convert.ToString(rdrGetMovieTheatreMapping[11]),
                };
                objMovieTheatreMapping.objTheatreScreenMappind = new TheatreScreenMapping()
                {
                    theatreScreenMappingID = Convert.ToInt32(rdrGetMovieTheatreMapping[2]),
                    objTheatre = new Theatres()
                    {
                        theatreID = Convert.ToInt32(rdrGetMovieTheatreMapping[13]),
                        theatreName = Convert.ToString(rdrGetMovieTheatreMapping[15]),
                        theatreRatings = Convert.ToDouble(rdrGetMovieTheatreMapping[16]),
                        theatreAddress = Convert.ToString(rdrGetMovieTheatreMapping[17]),
                    },
                    screenID = Convert.ToString(rdrGetMovieTheatreMapping[14]),
                    screenMatrix = Convert.ToString(rdrGetMovieTheatreMapping[15]),
                };
                objMovieTheatreMapping.showDate = Convert.ToString(rdrGetMovieTheatreMapping[3]);
                objMovieTheatreMapping.dynSeatMatrix = Convert.ToString(rdrGetMovieTheatreMapping[4]);
                lstMovieTheatreMapping.Add(objMovieTheatreMapping);
            }
            return lstMovieTheatreMapping;
        }

        public string PostMovieTheatreMapping(MovieTheatreMapping objMovieTheatreMapping)
        {
            try
            {
                con.Open();
                SqlCommand cmdSetMovies = new SqlCommand("UPDATE MovieTheatreMapping SET movieID=@movieID WHERE movieTheatreMappingID = @movieTheatreMappingID", con);
                cmdSetMovies.Parameters.AddWithValue("@movieID", objMovieTheatreMapping.objMovies.movieID);
                cmdSetMovies.Parameters.AddWithValue("@movieTheatreMappingID", objMovieTheatreMapping.movieTheatreMappingID);
                cmdSetMovies.ExecuteNonQuery();
                return "done";
            }
            catch(Exception e)
            {
                return e.Message;
            }
            
        }
        public string PostDynSeatMatrix(MovieTheatreMapping objMovieTheatreMapping)
        {
            try
            {
                con.Open();
                SqlCommand cmdSetMovies = new SqlCommand("UPDATE MovieTheatreMapping SET dynSeatMatrix=@dynSeatMatrix WHERE movieID = @movieID and showDate=@showDate and theatreScreenMapping=@theatreScreenMapping and movieTheatreMappingID = @movieTheatreMappingID", con);
                cmdSetMovies.Parameters.AddWithValue("@movieID", objMovieTheatreMapping.objMovies.movieID);
                cmdSetMovies.Parameters.AddWithValue("@movieTheatreMappingID", objMovieTheatreMapping.movieTheatreMappingID);
                cmdSetMovies.Parameters.AddWithValue("@showDate", objMovieTheatreMapping.showDate);
                cmdSetMovies.Parameters.AddWithValue("@theatreScreenMapping", objMovieTheatreMapping.objTheatreScreenMappind.theatreScreenMappingID);
                cmdSetMovies.Parameters.AddWithValue("@dynSeatMatrix", objMovieTheatreMapping.dynSeatMatrix);
                cmdSetMovies.ExecuteNonQuery();
                return "done";
            }
            catch (Exception e)
            {
                return e.Message;
            }

        }
    }
}
