using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TESO_Companion.Controllers
{
    public class MainPageController : Controller
    {
        // GET
        public IActionResult MainPage()
        {
            return this.View();
        }
    }
}