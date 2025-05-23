export async function fetchAll(status) {
  const response = await fetch(`http://localhost:5090/api/v1/matches/get-all-matches/${status}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Tournaments');
  }
  return response.json();
}

export async function fetchSingleMatchLeadboard(matchId) {
  const response = await fetch(`http://localhost:5090/api/v1/matches/get-match/${matchId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Match Leaderboard Data');
  }
  return response.json();
}


export const fetchTournamentMatches = async (tournamentId) => {
  const response = await fetch(
    `http://localhost:5090/api/v1/matches/tournaments/${tournamentId}/matches`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Match Leaderboard Data');
  }
  return response.json();
};
