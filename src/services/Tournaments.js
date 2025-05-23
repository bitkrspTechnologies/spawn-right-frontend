export async function fetchAllTournaments(status) {
    const response = await fetch(`http://localhost:5090/api/v1/tournaments/get-all-tournaments/${status}`);
    if (!response.ok) {
        throw new Error('Failed to fetch Tournaments');
    }
    return response.json();
}