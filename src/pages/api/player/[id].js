import players from '../../../data/players.json';
import wars from '../../../data/wars.json';
import { getPlayerStats, getPlayerWars } from '../../../utils/stats.js';

export function getStaticPaths() {
  return players.map((player) => ({
    params: { id: player.player_id },
    props: { player },
  }));
}

export async function GET({ props }) {
  const { player } = props;
  const stats = getPlayerStats(player.player_id, wars);
  const playerWars = getPlayerWars(player.player_id, wars);

  return new Response(
    JSON.stringify({
      status: 200,
      player: {
        ...player,
        stats,
        wars: playerWars,
      },
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600',
      },
    }
  );
}
