export default function ProgressBar({
  loading,
  error,
  remainingCount,
  isFinalized,
  onUnfinalize,
  onOpenNextIncomplete,
  onFinalize,
}) {
  if (loading || error) return null;

  return (
    <div className="progress-bar">
      <div className="progress-left">
        {remainingCount === 0 ? (
          <strong>All categories complete ✅</strong>
        ) : (
          <strong>
            {remainingCount} categorie{remainingCount === 1 ? "" : "s"} left
          </strong>
        )}
        <div className="progress-hint">
          Pick exactly 1 <strong>Want</strong> and 1 <strong>Will</strong> in
          each category.
        </div>
      </div>

      <div className="progress-actions">
        {isFinalized ? (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onUnfinalize}
          >
            Unfinalize
          </button>
        ) : (
          <>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onOpenNextIncomplete}
              disabled={remainingCount === 0}
            >
              Go to next incomplete
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onFinalize}
              disabled={remainingCount > 0}
            >
              Finalize picks
            </button>
          </>
        )}
      </div>
    </div>
  );
}
