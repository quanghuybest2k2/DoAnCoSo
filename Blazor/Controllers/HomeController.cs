using Blazor.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Blazor.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult TraiNghiemDichVu()
        {
            return View();
        }
        public IActionResult HanhTrinhToaSang()
        {
            return View();
        }
        public IActionResult KhamPhaKieuToc()
        {
            return View();
        }
        public IActionResult ShineShop()
        {
            return View();
        }
        public IActionResult TuyenDung()
        {
            return View();
        }
        public IActionResult DangNhap()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
