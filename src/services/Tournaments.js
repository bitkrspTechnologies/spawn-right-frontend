const apiConfig = {
    apiUrl: process.env.NEXT_PUBLIC_API_URL
};

export async function fetchAllTournaments(status, name) {
    const response = await fetch(`${apiConfig.apiUrl}/api/v1/tournaments/get-all-tournaments/${status}/${name}`);
    if (!response.ok) {
        throw new Error('Failed to fetch Tournaments');
    }
    return response.json();
};

export const fetchTournamentSeries = async (tournamentId, game) => {
    const response = await fetch(
        `${apiConfig.apiUrl}/api/v1/tournaments/get-all-series/${game}/${tournamentId}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch Match Leaderboard Data');
    }
    return response.json();
};
