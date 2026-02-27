import { useEffect, useMemo, useState } from "react";
import { getOscars2026 } from "../services/api";
import "../css/Home.css";

import Leaderboard from "../components/home/Leaderboard";
import ProgressBar from "../components/home/ProgressBar";
import CategoryAccordion from "../components/home/CategoryAccordion";
import ResultsModal from "../components/home/ResultsModal";

import { useUserPicks } from "../hooks/useUserPicks";
import { useWinners } from "../hooks/useWinners";
import { readJson } from "../utils/storage";
import { buildAwardSeasonKeys } from "../utils/awardSeasonKeys";

const YEAR = 2026;

// v1: local-only “users”
const USERS = [
  { id: "user_charles", name: "Charles" },
  { id: "user_friend_1", name: "Friend 1" },
  { id: "user_friend_2", name: "Friend 2" },
  { id: "user_friend_3", name: "Friend 3" },
];

function Home() {
  const [data, setData] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Step 3 UI state
  const [showCongrats, setShowCongrats] = useState(false);

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

  const categories = data?.categories ?? [];

  // Winners/admin (global)
  const {
    winnersByCategory,
    adminEnabled,
    setAdminEnabled,
    setWinner,
    clearWinner,
  } = useWinners({ year: YEAR });

  // Active user + picks/finalize (per user)
  const {
    activeUserId,
    setActiveUserId,
    activeUserName,

    openCategoryId,
    toggleCategory,

    getCategoryPicks,
    setPick,
    clearCategory,

    isFinalized,
    finalizeError,
    finalizeSuccess,
    handleFinalize,
    handleUnfinalize,

    remainingCount,
    openFirstIncomplete,
  } = useUserPicks({
    year: YEAR,
    users: USERS,
    categories,
  });

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

  const labelForNomination = (nomId) => {
    const nom = nominationById.get(nomId);
    if (!nom) return "Unknown nominee";
    const entity = entityById.get(nom.entityId);
    return nom.display?.primary ?? entity?.name ?? "Unknown nominee";
  };

  // --- Step 3: Leaderboard ---
  const { picksKeyForUser } = buildAwardSeasonKeys(YEAR);

  const leaderboard = useMemo(() => {
    if (!categories?.length) return [];

    const rows = USERS.map((u) => {
      const userPicks = readJson(picksKeyForUser(u.id), {});
      let score = 0;

      for (const cat of categories) {
        const winnerNomId = winnersByCategory?.[cat.id];
        if (!winnerNomId) continue; // not announced yet

        const willPick = userPicks?.[cat.id]?.will ?? null;
        if (willPick && willPick === winnerNomId) score += 1;
      }

      return { userId: u.id, name: u.name, score };
    });

    rows.sort((a, b) => b.score - a.score);
    return rows;
  }, [categories, winnersByCategory, picksKeyForUser]);

  const winnersSoFar = useMemo(() => {
    if (!categories?.length) return 0;
    let count = 0;
    for (const cat of categories) {
      if (winnersByCategory?.[cat.id]) count += 1;
    }
    return count;
  }, [categories, winnersByCategory]);

  const totalCategories = categories.length;

  const currentLeaders = useMemo(() => {
    if (leaderboard.length === 0) return [];
    const topScore = leaderboard[0].score;
    if (topScore === 0) return []; // no meaningful leader yet
    return leaderboard.filter((r) => r.score === topScore);
  }, [leaderboard]);

  // Show Congrats modal when ALL winners entered
  useEffect(() => {
    if (!totalCategories) return;
    if (winnersSoFar === totalCategories && totalCategories > 0) {
      setShowCongrats(true);
    }
  }, [winnersSoFar, totalCategories]);

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

          <label className="admin-toggle">
            <input
              type="checkbox"
              checked={adminEnabled}
              onChange={(e) => setAdminEnabled(e.target.checked)}
            />
            Admin mode
          </label>
        </div>
      </div>

      <Leaderboard
        loading={loading}
        error={error}
        leaderboard={leaderboard}
        winnersSoFar={winnersSoFar}
        totalCategories={totalCategories}
        adminEnabled={adminEnabled}
        onTestCongrats={() => setShowCongrats(true)}
      />

      <ProgressBar
        loading={loading}
        error={error}
        remainingCount={remainingCount}
        isFinalized={isFinalized}
        onUnfinalize={handleUnfinalize}
        onOpenNextIncomplete={openFirstIncomplete}
        onFinalize={handleFinalize}
      />

      {finalizeError && <div className="error-message">{finalizeError}</div>}
      {finalizeSuccess && (
        <div className="success-message">
          Picks finalized for <strong>{activeUserName}</strong> ✅
        </div>
      )}

      {error && <div className="error-message">{error}</div>}

      <CategoryAccordion
        loading={loading}
        error={error}
        categories={categories}
        openCategoryId={openCategoryId}
        onToggleCategory={toggleCategory}
        getCategoryPicks={getCategoryPicks}
        labelForNomination={labelForNomination}
        nominationById={nominationById}
        entityById={entityById}
        winnersByCategory={winnersByCategory}
        isFinalized={isFinalized}
        onSetPick={setPick}
        onClearCategory={clearCategory}
        adminEnabled={adminEnabled}
        onSetWinner={setWinner}
        onClearWinner={clearWinner}
      />

      <ResultsModal
        open={showCongrats}
        currentLeaders={currentLeaders}
        onClose={() => setShowCongrats(false)}
      />
    </div>
  );
}

export default Home;
