import axios from "axios";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export default async function Ship() {
  let ship = null;

  try {
    const response = await axios.get('https://localhost:7239/api/Swapi/ship', { httpsAgent: agent });
    console.log(response.data); 
    ship = response.data;
  } catch (error) {
    console.error('Error fetching the ship data:', error);
    return <div>Error fetching ship data</div>;
  }

  if (!ship) {
    return <div>No ship data available</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ship Information</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <tbody>
          <tr>
            <th className="text-left px-4 py-2 border">Name</th>
            <td className="px-4 py-2 border">{ship.name}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Model</th>
            <td className="px-4 py-2 border">{ship.model || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Manufacturer</th>
            <td className="px-4 py-2 border">{ship.manufacturer || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Cost In Credits</th>
            <td className="px-4 py-2 border">{ship.costInCredits || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Length</th>
            <td className="px-4 py-2 border">{ship.length || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Max Atmosphering Speed</th>
            <td className="px-4 py-2 border">{ship.maxAtmospheringSpeed || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Crew</th>
            <td className="px-4 py-2 border">{ship.crew || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Passengers</th>
            <td className="px-4 py-2 border">{ship.passengers || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Cargo Capacity</th>
            <td className="px-4 py-2 border">{ship.cargoCapacity || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Consumables</th>
            <td className="px-4 py-2 border">{ship.consumables || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Hyperdrive Rating</th>
            <td className="px-4 py-2 border">{ship.hyperdriveRating || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">MGLT</th>
            <td className="px-4 py-2 border">{ship.mglt || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Starship Class</th>
            <td className="px-4 py-2 border">{ship.starshipClass || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Pilots</th>
            <td className="px-4 py-2 border">{ship.pilots.length > 0 ? ship.pilots.join(', ') : 'None'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Films</th>
            <td className="px-4 py-2 border">{ship.films.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
