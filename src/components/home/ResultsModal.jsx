export default function ResultsModal({ open, currentLeaders, onClose }) {
  if (!open) return null;

  const stop = (e) => e.stopPropagation();

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Results"
      onClick={onClose}
    >
      <div className="modal" onClick={stop}>
        <h2>🏆 Results</h2>

        {currentLeaders.length === 0 ? (
          <p>
            Winners are in — but nobody has any correct “Will Win” picks yet.
          </p>
        ) : currentLeaders.length === 1 ? (
          <p>
            Congrats <strong>{currentLeaders[0].name}</strong> — you got the
            most correct! 🎉
          </p>
        ) : (
          <p>
            It’s a tie! Congrats{" "}
            <strong>{currentLeaders.map((l) => l.name).join(", ")}</strong> —
            you got the most correct! 🎉
          </p>
        )}

        <div className="modal-actions">
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
