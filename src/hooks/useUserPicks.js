import { useEffect, useMemo, useState } from "react";
import { readJson, writeJson } from "../utils/storage";
import { buildAwardSeasonKeys } from "../utils/awardSeasonKeys";

export function useUserPicks({ year, users, categories }) {
  const { ACTIVE_USER_KEY, picksKeyForUser, finalizedKeyForUser } =
    buildAwardSeasonKeys(year);

  const [openCategoryId, setOpenCategoryId] = useState(null);

  const [activeUserId, setActiveUserId] = useState(users?.[0]?.id ?? "");

  // picks for ACTIVE user only:
  // { [categoryId]: { want: string|null, will: string|null } }
  const [picksByCategory, setPicksByCategory] = useState({});

  // finalized for ACTIVE user only:
  const [isFinalized, setIsFinalized] = useState(false);

  // prevents overwriting before first load
  const [hasLoadedUserState, setHasLoadedUserState] = useState(false);

  // Step 2 UI state
  const [finalizeError, setFinalizeError] = useState(null);
  const [finalizeSuccess, setFinalizeSuccess] = useState(false);

  // Load active user from localStorage once
  useEffect(() => {
    const storedActiveUser = localStorage.getItem(ACTIVE_USER_KEY);
    if (storedActiveUser) setActiveUserId(storedActiveUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // once

  // Whenever active user changes:
  // 1) persist active user id
  // 2) load that user's picks + finalized state
  useEffect(() => {
    if (!activeUserId) return;

    localStorage.setItem(ACTIVE_USER_KEY, activeUserId);

    const loadedPicks = readJson(picksKeyForUser(activeUserId), {});
    setPicksByCategory(loadedPicks);

    const loadedFinalized = readJson(finalizedKeyForUser(activeUserId), false);
    setIsFinalized(Boolean(loadedFinalized));

    setFinalizeSuccess(false);
    setFinalizeError(null);

    setHasLoadedUserState(true);
  }, [activeUserId, ACTIVE_USER_KEY, picksKeyForUser, finalizedKeyForUser]);

  // Persist picks for active user (only after their state is loaded)
  useEffect(() => {
    if (!hasLoadedUserState || !activeUserId) return;
    writeJson(picksKeyForUser(activeUserId), picksByCategory);
  }, [picksByCategory, activeUserId, hasLoadedUserState, picksKeyForUser]);

  // Persist finalized for active user
  useEffect(() => {
    if (!hasLoadedUserState || !activeUserId) return;
    writeJson(finalizedKeyForUser(activeUserId), isFinalized);
  }, [isFinalized, activeUserId, hasLoadedUserState, finalizedKeyForUser]);

  const activeUserName =
    users.find((u) => u.id === activeUserId)?.name ?? "Unknown";

  const toggleCategory = (categoryId) => {
    setOpenCategoryId((prev) => (prev === categoryId ? null : categoryId));
  };

  const getCategoryPicks = (categoryId) => {
    return picksByCategory?.[categoryId] ?? { want: null, will: null };
  };

  const setPick = (categoryId, kind, nominationId) => {
    if (isFinalized) return;

    setPicksByCategory((prev) => {
      const prevCat = prev[categoryId] ?? { want: null, will: null };
      const current = prevCat[kind];

      return {
        ...prev,
        [categoryId]: {
          ...prevCat,
          [kind]: current === nominationId ? null : nominationId,
        },
      };
    });
  };

  const clearCategory = (categoryId) => {
    if (isFinalized) return;

    setPicksByCategory((prev) => ({
      ...prev,
      [categoryId]: { want: null, will: null },
    }));
  };

  // Step 2: compute remaining categories
  const remainingCategoryIds = useMemo(() => {
    if (!categories?.length) return [];
    const remaining = [];
    for (const cat of categories) {
      const picks = picksByCategory?.[cat.id] ?? { want: null, will: null };
      if (!picks.want || !picks.will) remaining.push(cat.id);
    }
    return remaining;
  }, [categories, picksByCategory]);

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
        `You still have ${remainingCount} categorie${
          remainingCount === 1 ? "" : "s"
        } left to complete.`,
      );
      openFirstIncomplete();
      return;
    }

    setIsFinalized(true);
    setFinalizeSuccess(true);
  };

  const handleUnfinalize = () => {
    setFinalizeSuccess(false);
    setFinalizeError(null);
    setIsFinalized(false);
  };

  return {
    // active user
    activeUserId,
    setActiveUserId,
    activeUserName,

    // accordion
    openCategoryId,
    setOpenCategoryId,
    toggleCategory,

    // picks
    picksByCategory,
    setPicksByCategory,
    getCategoryPicks,
    setPick,
    clearCategory,

    // finalize
    isFinalized,
    setIsFinalized,
    finalizeError,
    finalizeSuccess,
    handleFinalize,
    handleUnfinalize,

    // progress
    remainingCategoryIds,
    remainingCount,
    openFirstIncomplete,
  };
}
