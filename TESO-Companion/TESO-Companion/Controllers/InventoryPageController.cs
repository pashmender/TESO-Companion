using Microsoft.AspNetCore.Mvc;

namespace TESO_Companion.Controllers
{
    public class InventoryPageController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}