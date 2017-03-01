using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer
{
    public class TheatreScreenMapping
    {
        public int theatreScreenMappingID { get; set; }
        public Theatres objTheatre { get; set; }
        public string screenID { get; set; }
        public string screenMatrix { get; set; }
    }
}
