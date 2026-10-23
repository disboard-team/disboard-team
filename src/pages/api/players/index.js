import players from '../../../data/players.json';
import wars from '../../../data/wars.json';
import { getPlayerStats } from '../../../utils/stats.js';

export async function GET() {
  const playersWithStats = players.map((player) => {
    const stats = getPlayerStats(player.player_id, wars);
    return {
      ...player,
      stats,
    };
  });

  return new Response(JSON.stringify({ status: 200, count: playersWithStats.length, players: playersWithStats }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

