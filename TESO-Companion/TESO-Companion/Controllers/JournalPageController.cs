using Microsoft.AspNetCore.Mvc;

namespace TESO_Companion.Controllers
{
    public class JournalPageController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}