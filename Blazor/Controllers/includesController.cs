using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor.Controllers
{
    public class includesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Header()
        {
            return View();
        }
        public IActionResult Footer()
        {
            return View();
        }
    }
}
