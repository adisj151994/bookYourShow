using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer
{
    public class MovieTheatreMapping
    {
        public int movieTheatreMappingID { get; set; }
        public Movies objMovies { get; set; }
        public TheatreScreenMapping objTheatreScreenMappind { get; set; }
        public string showDate { get; set; }
        public string dynSeatMatrix { get; set; }
    }
}
