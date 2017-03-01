using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer
{
    public class Movies
    {
        public int movieID { set; get; }
        public string movieName { get; set; }
        public int movieDuration { get; set; }
        public string movieGenre { get; set; }
        public string movieRated { get; set; }
        public double movieRatings { get; set; }
        public string movieDescription { get; set; }
    }
}
