import axios from "axios";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export default async function Planet() {
    let planet = null;

  try {
    const response = await axios.get('https://localhost:7239/api/Swapi/planet', { httpsAgent: agent });
    console.log(response.data);
    planet = response.data;
  } catch (error) {
    console.error('Error fetching the planet data:', error);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Planet Information</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <tbody>
          <tr>
            <th className="text-left px-4 py-2 border">Name</th>
            <td className="px-4 py-2 border">{planet.name}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Rotation Period</th>
            <td className="px-4 py-2 border">{planet.rotationPeriod || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Orbital Period</th>
            <td className="px-4 py-2 border">{planet.orbitalPeriod || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Diameter</th>
            <td className="px-4 py-2 border">{planet.diameter}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Climate</th>
            <td className="px-4 py-2 border">{planet.climate}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Gravity</th>
            <td className="px-4 py-2 border">{planet.gravity}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Terrain</th>
            <td className="px-4 py-2 border">{planet.terrain}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Surface Water</th>
            <td className="px-4 py-2 border">{planet.surfaceWater || 'N/A'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Population</th>
            <td className="px-4 py-2 border">{planet.population}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Residents</th>
            <td className="px-4 py-2 border">{planet.residents.length > 0 ? planet.residents.join(', ') : 'None'}</td>
          </tr>
          <tr>
            <th className="text-left px-4 py-2 border">Films</th>
            <td className="px-4 py-2 border">{planet.films.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
