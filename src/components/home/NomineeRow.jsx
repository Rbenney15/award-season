export default function NomineeRow({
  primary,
  secondary,
  wantSelected,
  willSelected,
  isWinner,
  disabled,
  adminEnabled,
  onWant,
  onWill,
  onWinner,
}) {
  return (
    <div className="nominee-row">
      <div className="nominee-text">
        <div className="nominee-primary">
          {primary}{" "}
          {isWinner ? <span className="winner-badge">WINNER</span> : null}
        </div>

        {secondary ? (
          <div className="nominee-secondary">{secondary}</div>
        ) : null}
      </div>

      <div className="pick-buttons">
        <button
          type="button"
          className={`btn btn-pick ${wantSelected ? "selected want" : ""}`}
          onClick={onWant}
          aria-pressed={wantSelected}
          disabled={disabled}
        >
          Want
        </button>

        <button
          type="button"
          className={`btn btn-pick ${willSelected ? "selected will" : ""}`}
          onClick={onWill}
          aria-pressed={willSelected}
          disabled={disabled}
        >
          Will
        </button>

        {adminEnabled && (
          <button
            type="button"
            className={`btn btn-pick ${isWinner ? "selected winner" : ""}`}
            onClick={onWinner}
            aria-pressed={isWinner}
            title="Set winner"
          >
            Winner
          </button>
        )}
      </div>
    </div>
  );
}
