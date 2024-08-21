using REST_API_dxdy_Task_Gayan.Models;

namespace REST_API_dxdy_Task_Gayan.Services
{
    public class SwapiService
    {
        private readonly HttpClient _httpClient;

        public SwapiService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<Planet> GetPlanetAsync(string url)
        {
            var response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            return await response.Content.ReadFromJsonAsync<Planet>();
        }

        public async Task<Ship> GetShipAsync(string url)
        {
            var response = await _httpClient.GetAsync(url);
            response.EnsureSuccessStatusCode();

            return await response.Content.ReadFromJsonAsync<Ship>();
        }
    }

}
