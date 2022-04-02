using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebsiteBlazor.Controllers
{
    public class EvaluationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
