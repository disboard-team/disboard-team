import wars from '../../../data/wars.json';

export async function GET() {
  return new Response(JSON.stringify({ status: 200, count: wars.length, wars }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

