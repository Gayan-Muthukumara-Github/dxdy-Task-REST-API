﻿using REST_API_dxdy_Task_Gayan.Models;

namespace REST_API_dxdy_Task_Gayan.Models
{
    public class Ship
    {
        public string Name { get; set; }
        public string Model { get; set; }
        public string Manufacturer { get; set; }
        public string CostInCredits { get; set; }
        public string Length { get; set; }
        public string MaxAtmospheringSpeed { get; set; }
        public string Crew { get; set; }
        public string Passengers { get; set; }
        public string CargoCapacity { get; set; }
        public string Consumables { get; set; }
        public string HyperdriveRating { get; set; }
        public string MGLT { get; set; }
        public string StarshipClass { get; set; }
        public List<string> Pilots { get; set; }
        public List<string> Films { get; set; }
    }
}

