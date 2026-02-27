export default function Leaderboard({
  loading,
  error,
  leaderboard,
  winnersSoFar,
  totalCategories,
  adminEnabled,
  onTestCongrats,
}) {
  if (loading || error) return null;

  return (
    <div className="leaderboard">
      <div className="leaderboard-top">
        <div>
          <strong>Leaderboard</strong>
          <div className="leaderboard-sub">
            Winners entered: {winnersSoFar}/{totalCategories}
          </div>
        </div>

        {adminEnabled && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onTestCongrats}
            title="Test the congrats modal"
          >
            Test Congrats
          </button>
        )}
      </div>

      <ol className="leaderboard-list">
        {leaderboard.map((row) => (
          <li key={row.userId} className="leaderboard-row">
            <span className="leaderboard-name">{row.name}</span>
            <span className="leaderboard-score">{row.score}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
