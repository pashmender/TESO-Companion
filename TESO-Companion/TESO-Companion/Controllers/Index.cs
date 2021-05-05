using Microsoft.AspNetCore.Mvc;

namespace TESO_Companion.Controllers
{
    public class IndexController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View("Index");
        }
    }
}