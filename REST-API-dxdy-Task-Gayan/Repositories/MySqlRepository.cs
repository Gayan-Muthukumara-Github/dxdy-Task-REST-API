using Microsoft.Data.SqlClient;
using REST_API_dxdy_Task_Gayan.Models;
using System.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;

namespace REST_API_dxdy_Task_Gayan.Repositories
{
    public class MySqlRepository
    {
        private readonly SqlConnection _connection;

        public MySqlRepository(SqlConnection connection)
        {
            _connection = connection;
        }

        public async Task SavePlanetAsync(Planet planet)
        {
            var query = "INSERT INTO Planets (Name, Climate, Population) VALUES (@Name, @Climate, @Population)";
            using var command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Name", planet.Name);
            command.Parameters.AddWithValue("@Climate", planet.Climate);
            command.Parameters.AddWithValue("@Population", planet.Population);

            await _connection.OpenAsync();
            await command.ExecuteNonQueryAsync();
            await _connection.CloseAsync();
        }

        public async Task SaveShipAsync(Ship ship)
        {
            var query = "INSERT INTO Ships (Name, Model, Manufacturer) VALUES (@Name, @Model, @Manufacturer)";
            using var command = new SqlCommand(query, _connection);
            command.Parameters.AddWithValue("@Name", ship.Name);
            command.Parameters.AddWithValue("@Model", ship.Model);
            command.Parameters.AddWithValue("@Manufacturer", ship.Manufacturer);

            await _connection.OpenAsync();
            await command.ExecuteNonQueryAsync();
            await _connection.CloseAsync();
        }
    }

}
