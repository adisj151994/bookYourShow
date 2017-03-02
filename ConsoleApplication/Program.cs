using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataLayer;
using System.Data.SqlClient;

namespace ConsoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 0;
            SqlConnection con = new SqlConnection(@"Data Source=DESKTOP-PFA0L7A\SQLEXPRESS;Initial Catalog=bookYourShowDB;Integrated Security=True");
            //con.Open();

            for (i = 0; i < 7; i++)
            {
                CrudOperations objCrud = new CrudOperations();
                objCrud.Test();
                
                SqlCommand cmdGetMovies = new SqlCommand("INSERT INTO MovieTheatreMapping VALUES (1,3,@date,(SELECT seatMatrix FROM TheatreScreenMapping WHERE TheatreScreenMappingID = 3))", con);
                cmdGetMovies.Parameters.AddWithValue("@date", 13 + i + "-2-2017:M");
                cmdGetMovies.ExecuteNonQuery();
                SqlCommand cmdGetMovies1 = new SqlCommand("INSERT INTO MovieTheatreMapping VALUES (1,3,@date,(SELECT seatMatrix FROM TheatreScreenMapping WHERE TheatreScreenMappingID = 3))", con);
                cmdGetMovies1.Parameters.AddWithValue("@date", 13 + i + "-2-2017:A");
                cmdGetMovies1.ExecuteNonQuery();
                SqlCommand cmdGetMovies2 = new SqlCommand("INSERT INTO MovieTheatreMapping VALUES (1,3,@date,(SELECT seatMatrix FROM TheatreScreenMapping WHERE TheatreScreenMappingID = 3))", con);
                cmdGetMovies2.Parameters.AddWithValue("@date", 13 + i + "-2-2017:N");
                cmdGetMovies2.ExecuteNonQuery();
            }

            con.Close();
        }
    }
}
