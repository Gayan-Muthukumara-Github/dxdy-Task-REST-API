using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using REST_API_dxdy_Task_Gayan.Models;
using REST_API_dxdy_Task_Gayan.Repositories;
using REST_API_dxdy_Task_Gayan.Services;

namespace REST_API_dxdy_Task_Gayan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SwapiController : ControllerBase
    {
        private readonly SwapiService _swapiService;
        private readonly MySqlRepository _repository;

        public SwapiController(SwapiService swapiService, MySqlRepository repository)
        {
            _swapiService = swapiService;
            _repository = repository;
        }

        [HttpGet("planet")]
        public async Task<IActionResult> GetPlanet()
        {
            var planet = await _swapiService.GetPlanetAsync("https://swapi.dev/api/planets/3/");
            return Ok(planet);
        }

        [HttpGet("ship")]
        public async Task<IActionResult> GetShip()
        {
            var ship = await _swapiService.GetShipAsync("https://swapi.dev/api/starships/9/");
            return Ok(ship);
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitData([FromBody] ProcessedDataModel data)
        {
            await _repository.SavePlanetAsync(data.Planet);
            await _repository.SaveShipAsync(data.Ship);

            // Simulate sending data to another system's API (mock).
            return Ok(new { message = "Data submitted successfully" });
        }
    }
}
