using Microsoft.AspNetCore.Mvc;
using CotizadorUSMediaApi.Server.Models; // Ajusta esto a tu namespace

namespace CotizadorUSMediaApi.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CampaignController : ControllerBase
    {
        private static List<Campaign> _campaigns = new List<Campaign>(); // Simulación de datos

        [HttpGet]
        public IActionResult GetCampaigns()
        {
            return Ok(_campaigns);
        }

        [HttpPost]
        public IActionResult CreateCampaign([FromBody] Campaign campaign)
        {
            _campaigns.Add(campaign);
            return Ok(campaign);
        }
    }
}
