import { useEffect, useState } from "react";
import { readJson, writeJson } from "../utils/storage";
import { buildAwardSeasonKeys } from "../utils/awardSeasonKeys";

export function useWinners({ year }) {
  const { winnersKey, adminEnabledKey } = buildAwardSeasonKeys(year);

  const [winnersByCategory, setWinnersByCategory] = useState({});
  const [adminEnabled, setAdminEnabled] = useState(false);

  // prevents overwriting before first load
  const [hasLoadedWinners, setHasLoadedWinners] = useState(false);

  // Load winners + admin toggle once
  useEffect(() => {
    const storedWinners = readJson(winnersKey, {});
    setWinnersByCategory(storedWinners);

    const storedAdmin = readJson(adminEnabledKey, false);
    setAdminEnabled(Boolean(storedAdmin));

    setHasLoadedWinners(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // once

  // Persist winners
  useEffect(() => {
    if (!hasLoadedWinners) return;
    writeJson(winnersKey, winnersByCategory);
  }, [winnersByCategory, hasLoadedWinners, winnersKey]);

  // Persist admin toggle
  useEffect(() => {
    if (!hasLoadedWinners) return;
    writeJson(adminEnabledKey, adminEnabled);
  }, [adminEnabled, hasLoadedWinners, adminEnabledKey]);

  const setWinner = (categoryId, nominationId) => {
    if (!adminEnabled) return;
    setWinnersByCategory((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === nominationId ? null : nominationId,
    }));
  };

  const clearWinner = (categoryId) => {
    if (!adminEnabled) return;
    setWinnersByCategory((prev) => {
      const next = { ...prev };
      delete next[categoryId];
      return next;
    });
  };

  return {
    winnersByCategory,
    setWinnersByCategory, // optional, but handy if you ever bulk-import winners
    adminEnabled,
    setAdminEnabled,
    setWinner,
    clearWinner,
  };
}
