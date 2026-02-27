import { useEffect, useMemo, useState } from "react";
import { getOscars2026 } from "../services/api";
import "../css/Home.css";

const YEAR = 2026;

// v1: local-only “users”
const USERS = [
  { id: "user_charles", name: "Charles" },
  { id: "user_friend_1", name: "Friend 1" },
  { id: "user_friend_2", name: "Friend 2" },
  { id: "user_friend_3", name: "Friend 3" },
];

const ACTIVE_USER_KEY = `award_season_active_user_${YEAR}`;
const PICKS_KEY = `award_season_picks_${YEAR}`;

// Step 2 keys
const FINALIZED_KEY = `award_season_finalized_${YEAR}`;

/**
 * Picks shape (stored in localStorage):
 * {
 *   [userId]: {
 *     [categoryId]: { want: nominationId|null, will: nominationId|null }
 *   }
 * }
 *
 * Finalized shape:
 * { [userId]: boolean }
 */

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function Home() {
  const [data, setData] = useState(null);
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const [activeUserId, setActiveUserId] = useState(USERS[0].id);
  const [picksByUser, setPicksByUser] = useState({});
  const [finalizedByUser, setFinalizedByUser] = useState({});

  // ✅ prevents overwriting storage on first render
  const [hasLoadedStorage, setHasLoadedStorage] = useState(false);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Step 2 UI state
  const [finalizeError, setFinalizeError] = useState(null);
  const [finalizeSuccess, setFinalizeSuccess] = useState(false);

  // Load Oscars data
  useEffect(() => {
    const loadOscars = async () => {
      try {
        const payload = await getOscars2026();
        setData(payload);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to load Oscars nominees...");
      } finally {
        setLoading(false);
      }
    };

    loadOscars();
  }, []);

  // ✅ Load localStorage ONCE (active user + picks + finalized)
  useEffect(() => {
    const storedActiveUser = localStorage.getItem(ACTIVE_USER_KEY);
    if (storedActiveUser) setActiveUserId(storedActiveUser);

    const storedPicks = readJson(PICKS_KEY, {});
    setPicksByUser(storedPicks);

    const storedFinalized = readJson(FINALIZED_KEY, {});
    setFinalizedByUser(storedFinalized);

    setHasLoadedStorage(true);
  }, []);

  // Persist active user (only after storage is loaded)
  useEffect(() => {
    if (!hasLoadedStorage) return;
    localStorage.setItem(ACTIVE_USER_KEY, activeUserId);
  }, [activeUserId, hasLoadedStorage]);

  // Persist picks (only after storage is loaded)
  useEffect(() => {
    if (!hasLoadedStorage) return;
    writeJson(PICKS_KEY, picksByUser);
  }, [picksByUser, hasLoadedStorage]);

  // Persist finalized (only after storage is loaded)
  useEffect(() => {
    if (!hasLoadedStorage) return;
    writeJson(FINALIZED_KEY, finalizedByUser);
  }, [finalizedByUser, hasLoadedStorage]);

  // Clear success banner when switching users
  useEffect(() => {
    setFinalizeSuccess(false);
    setFinalizeError(null);
  }, [activeUserId]);

  const nominationById = useMemo(() => {
    const map = new Map();
    if (!data?.nominations) return map;
    for (const n of data.nominations) map.set(n.id, n);
    return map;
  }, [data]);

  const entityById = useMemo(() => {
    const map = new Map();
    if (!data?.entities) return map;
    for (const e of data.entities) map.set(e.id, e);
    return map;
  }, [data]);

  const toggleCategory = (categoryId) => {
    setOpenCategoryId((prev) => (prev === categoryId ? null : categoryId));
  };

  const activeUserName =
    USERS.find((u) => u.id === activeUserId)?.name ?? "Unknown";

  const isFinalized = Boolean(finalizedByUser?.[activeUserId]);

  const getCategoryPicks = (categoryId) => {
    return (
      picksByUser?.[activeUserId]?.[categoryId] ?? { want: null, will: null }
    );
  };

  const setPick = (categoryId, kind, nominationId) => {
    if (isFinalized) return; // locked once finalized

    // kind: "want" | "will"
    setPicksByUser((prev) => {
      const prevUser = prev[activeUserId] ?? {};
      const prevCat = prevUser[categoryId] ?? { want: null, will: null };
      const current = prevCat[kind];

      const nextCat = {
        ...prevCat,
        [kind]: current === nominationId ? null : nominationId,
      };

      return {
        ...prev,
        [activeUserId]: {
          ...prevUser,
          [categoryId]: nextCat,
        },
      };
    });
  };

  const clearCategory = (categoryId) => {
    if (isFinalized) return;

    setPicksByUser((prev) => {
      const prevUser = prev[activeUserId] ?? {};
      return {
        ...prev,
        [activeUserId]: {
          ...prevUser,
          [categoryId]: { want: null, will: null },
        },
      };
    });
  };

  const labelForNomination = (nomId) => {
    const nom = nominationById.get(nomId);
    if (!nom) return "Unknown nominee";
    const entity = entityById.get(nom.entityId);
    return nom.display?.primary ?? entity?.name ?? "Unknown nominee";
  };

  // Step 2: compute remaining categories
  const remainingCategoryIds = useMemo(() => {
    if (!data?.categories) return [];
    const remaining = [];
    for (const cat of data.categories) {
      const picks = picksByUser?.[activeUserId]?.[cat.id] ?? {
        want: null,
        will: null,
      };
      if (!picks.want || !picks.will) remaining.push(cat.id);
    }
    return remaining;
  }, [data, picksByUser, activeUserId]);

  const remainingCount = remainingCategoryIds.length;

  const openFirstIncomplete = () => {
    if (remainingCount === 0) return;
    setOpenCategoryId(remainingCategoryIds[0]);
  };

  const handleFinalize = () => {
    setFinalizeSuccess(false);
    setFinalizeError(null);

    if (remainingCount > 0) {
      setFinalizeError(
        `You still have ${remainingCount} categorie${remainingCount === 1 ? "" : "s"} left to complete.`,
      );
      openFirstIncomplete();
      return;
    }

    setFinalizedByUser((prev) => ({
      ...prev,
      [activeUserId]: true,
    }));
    setFinalizeSuccess(true);
  };

  const handleUnfinalize = () => {
    setFinalizeSuccess(false);
    setFinalizeError(null);

    setFinalizedByUser((prev) => ({
      ...prev,
      [activeUserId]: false,
    }));
  };

  return (
    <div className="home">
      <div className="home-header">
        <div>
          <h1>Oscars {YEAR}</h1>
          <div className="subtitle">
            Active user: <strong>{activeUserName}</strong>
            {isFinalized ? (
              <span className="status-pill locked">Finalized</span>
            ) : (
              <span className="status-pill editing">Editing</span>
            )}
          </div>
        </div>

        <div className="user-switcher">
          <label className="user-label" htmlFor="active-user">
            Switch user
          </label>
          <select
            id="active-user"
            className="user-select"
            value={activeUserId}
            onChange={(e) => setActiveUserId(e.target.value)}
          >
            {USERS.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Step 2: Progress + Finalize */}
      {!loading && !error && (
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
              Pick exactly 1 <strong>Want</strong> and 1 <strong>Will</strong>{" "}
              in each category.
            </div>
          </div>

          <div className="progress-actions">
            {isFinalized ? (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleUnfinalize}
              >
                Unfinalize
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={openFirstIncomplete}
                  disabled={remainingCount === 0}
                >
                  Go to next incomplete
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleFinalize}
                  disabled={remainingCount > 0}
                >
                  Finalize picks
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {finalizeError && <div className="error-message">{finalizeError}</div>}
      {finalizeSuccess && (
        <div className="success-message">
          Picks finalized for <strong>{activeUserName}</strong> ✅
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading nominees...</div>
      ) : (
        <div className="accordion">
          {data?.categories?.map((cat) => {
            const isOpen = openCategoryId === cat.id;
            const picks = getCategoryPicks(cat.id);

            return (
              <section
                key={cat.id}
                className={`accordion-item ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  className="accordion-header"
                  onClick={() => toggleCategory(cat.id)}
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
                  </span>

                  <span className="accordion-indicator">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="accordion-panel">
                    <div className="category-actions">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => clearCategory(cat.id)}
                        disabled={isFinalized}
                        title={
                          isFinalized
                            ? "Picks are finalized for this user"
                            : "Clear Want + Will for this category"
                        }
                      >
                        Clear picks
                      </button>
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

                        return (
                          <li key={nom.id} className="nominee">
                            <div className="nominee-row">
                              <div className="nominee-text">
                                <div className="nominee-primary">{primary}</div>
                                {secondary ? (
                                  <div className="nominee-secondary">
                                    {secondary}
                                  </div>
                                ) : null}
                              </div>

                              <div className="pick-buttons">
                                <button
                                  type="button"
                                  className={`btn btn-pick ${
                                    wantSelected ? "selected want" : ""
                                  }`}
                                  onClick={() =>
                                    setPick(cat.id, "want", nom.id)
                                  }
                                  aria-pressed={wantSelected}
                                  disabled={isFinalized}
                                >
                                  Want
                                </button>

                                <button
                                  type="button"
                                  className={`btn btn-pick ${
                                    willSelected ? "selected will" : ""
                                  }`}
                                  onClick={() =>
                                    setPick(cat.id, "will", nom.id)
                                  }
                                  aria-pressed={willSelected}
                                  disabled={isFinalized}
                                >
                                  Will
                                </button>
                              </div>
                            </div>
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
      )}
    </div>
  );
}

export default Home;
