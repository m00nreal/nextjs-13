const workouts = ['Chest', 'Legs']

export async function GET(request: Request) {
  return new Response(workouts.toString())
}

export async function POST(request: Request) {
  
}