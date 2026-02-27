export function buildAwardSeasonKeys(year) {
  const ACTIVE_USER_KEY = `award_season_active_user_${year}`;

  const picksKeyForUser = (userId) => `award_season_picks_${year}_${userId}`;
  const finalizedKeyForUser = (userId) =>
    `award_season_finalized_${year}_${userId}`;

  // Step 3
  const winnersKey = `award_season_winners_${year}`; // { [categoryId]: nominationId }
  const adminEnabledKey = `award_season_admin_enabled_${year}`; // boolean

  return {
    ACTIVE_USER_KEY,
    picksKeyForUser,
    finalizedKeyForUser,
    winnersKey,
    adminEnabledKey,
  };
}
