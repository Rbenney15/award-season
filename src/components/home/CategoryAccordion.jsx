import NomineeRow from "./NomineeRow";

export default function CategoryAccordion({
  loading,
  error,
  categories,

  openCategoryId,
  onToggleCategory,

  getCategoryPicks,
  labelForNomination,

  nominationById,
  entityById,

  winnersByCategory,
  isFinalized,

  onSetPick,
  onClearCategory,

  adminEnabled,
  onSetWinner,
  onClearWinner,
}) {
  if (loading) return <div className="loading">Loading nominees...</div>;
  if (error) return null;

  return (
    <div className="accordion">
      {categories?.map((cat) => {
        const isOpen = openCategoryId === cat.id;
        const picks = getCategoryPicks(cat.id);
        const winnerNomId = winnersByCategory?.[cat.id] ?? null;

        return (
          <section
            key={cat.id}
            className={`accordion-item ${isOpen ? "open" : ""}`}
          >
            <button
              type="button"
              className="accordion-header"
              onClick={() => onToggleCategory(cat.id)}
              aria-expanded={isOpen}
            >
              <span className="accordion-title">{cat.name}</span>

              <span className="accordion-meta">
                <span className={`pill ${picks.want ? "set" : ""}`}>
                  Want: {picks.want ? labelForNomination(picks.want) : "—"}
                </span>
                <span className={`pill ${picks.will ? "set" : ""}`}>
                  Will: {picks.will ? labelForNomination(picks.will) : "—"}
                </span>
                <span className={`pill ${winnerNomId ? "winner" : ""}`}>
                  Winner: {winnerNomId ? labelForNomination(winnerNomId) : "—"}
                </span>
              </span>

              <span className="accordion-indicator">{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && (
              <div className="accordion-panel">
                <div className="category-actions">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => onClearCategory(cat.id)}
                    disabled={isFinalized}
                  >
                    Clear picks
                  </button>

                  {adminEnabled && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => onClearWinner(cat.id)}
                      style={{ marginLeft: "0.5rem" }}
                      title="Clear winner for this category"
                    >
                      Clear winner
                    </button>
                  )}
                </div>

                <ul className="nominee-list">
                  {cat.nominationIds.map((nomId) => {
                    const nom = nominationById.get(nomId);

                    if (!nom) {
                      return (
                        <li key={nomId} className="nominee missing">
                          Missing nomination: <code>{nomId}</code>
                        </li>
                      );
                    }

                    const entity = entityById.get(nom.entityId);
                    const primary =
                      nom.display?.primary ?? entity?.name ?? "Unknown";
                    const secondary = nom.display?.secondary ?? "";

                    const wantSelected = picks.want === nom.id;
                    const willSelected = picks.will === nom.id;
                    const isWinner = winnerNomId === nom.id;

                    return (
                      <li
                        key={nom.id}
                        className={`nominee ${isWinner ? "winner" : ""}`}
                      >
                        <NomineeRow
                          primary={primary}
                          secondary={secondary}
                          wantSelected={wantSelected}
                          willSelected={willSelected}
                          isWinner={isWinner}
                          disabled={isFinalized}
                          adminEnabled={adminEnabled}
                          onWant={() => onSetPick(cat.id, "want", nom.id)}
                          onWill={() => onSetPick(cat.id, "will", nom.id)}
                          onWinner={() => onSetWinner(cat.id, nom.id)}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
