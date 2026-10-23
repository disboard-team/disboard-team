import teams from '../../../data/teams.json';

export async function GET() {
  return new Response(JSON.stringify({ status: 200, count: teams.length, teams }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

