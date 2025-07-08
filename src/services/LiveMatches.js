const apiConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL
};

export async function fetchAll(status) {
  let url = `${apiConfig.apiUrl}/api/v1/matches`;
  if (status) {
    url = `${apiConfig.apiUrl}/api/v1/matches/get-all-matches/${status}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Tournaments');
  }
  return response.json();
}

export async function fetchSingleMatchLeadboard(matchId) {
  const response = await fetch(`${apiConfig.apiUrl}/api/v1/matches/get-match/${matchId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Match Leaderboard Data');
  }
  return response.json();
}


export const fetchTournamentMatches = async (tournamentId) => {
  const response = await fetch(
    `${apiConfig.apiUrl}/api/v1/matches/tournaments/${tournamentId}/matches`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Match Leaderboard Data');
  }
  return response.json();
};

export const fetchLiveStreams = async () => {
  const response = await fetch(
    `${apiConfig.apiUrl}/api/v1/liveshow/get-all-liveshow`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Match Leaderboard Data');
  }
  return response.json();
};

export const getSeriesMatchesbyId = async (ids) => {
  const response = await fetch(
    `${apiConfig.apiUrl}/api/v1/matches/get-all-matches-by-series`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids: ids })
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Match Leaderboard Data');
  }
  return response.json();
};

