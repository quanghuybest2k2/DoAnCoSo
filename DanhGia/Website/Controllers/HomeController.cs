using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebsiteBlazor.Models;

namespace WebsiteBlazor.Controllers
{
	public class HomeController : Controller
	{
		private readonly IWebHostEnvironment _appEnvironment;
		private readonly ILogger<HomeController> _logger;

		public HomeController(ILogger<HomeController> logger, IWebHostEnvironment appEnvironment)
		{
			_logger = logger;
			_appEnvironment = appEnvironment;
		}

		/// <summary>
		/// GET: Trang chủ
		/// Bộ đếm sử dụng Blazor
		/// </summary>
		/// <returns></returns>
		public IActionResult Index()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}

		public IActionResult Blazor()
		{
			return View("_Host");
		}

		[HttpGet("api/DocFile/{tenFile}")]
		public IActionResult DocFile(string tenFile)
        {
			string filePath = Path.Combine(_appEnvironment.WebRootPath, "files", tenFile);
            if (System.IO.File.Exists(filePath))
            {
				return Content(System.IO.File.ReadAllText(filePath));
            }
			return NotFound();
        }
	}
}
