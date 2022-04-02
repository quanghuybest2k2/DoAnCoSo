using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WebsiteBlazor.Models;

namespace WebsiteBlazor.Controllers
{
	public class HomeController : Controller
	{
		public static int CurrentCount = 0;

		private readonly ILogger<HomeController> _logger;

		public HomeController(ILogger<HomeController> logger)
		{
			_logger = logger;
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
	}
}
