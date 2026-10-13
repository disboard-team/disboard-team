/**
 * Utility functions to calculate player stats from wars data
 */

export function getPlayerStats(playerId, wars) {
  let warsPlayed = 0;
  let totalScore = 0;
  let wins = 0;
  let losses = 0;
  let mvps = 0;

  for (const war of wars) {
    let playerParticipatedInWar = false;
    let playerScoreInWar = null;
    let playerTeamInWar = null;

    // Find highest individual score across all players in this war
    let highestScoreInWar = -1;
    for (const team of war.teams) {
      if (Array.isArray(team.players)) {
        for (const p of team.players) {
          if (p.score > highestScoreInWar) {
            highestScoreInWar = p.score;
          }
        }
      }
    }

    for (const team of war.teams) {
      if (Array.isArray(team.players)) {
        const found = team.players.find(
          (p) => p.player_id === playerId || p.player_name?.toLowerCase() === playerId.toLowerCase()
        );
        if (found) {
          playerParticipatedInWar = true;
          playerScoreInWar = found.score || 0;
          playerTeamInWar = team;
          break;
        }
      }
    }

    if (playerParticipatedInWar) {
      warsPlayed++;
      totalScore += playerScoreInWar;

      if (playerTeamInWar.is_winner) {
        wins++;
      } else {
        losses++;
      }

      if (playerScoreInWar > 0 && playerScoreInWar === highestScoreInWar) {
        mvps++;
      }
    }
  }

  const avgScore = warsPlayed > 0 ? (totalScore / warsPlayed).toFixed(1) : "0.0";
  const winLossRatio =
    losses === 0
      ? (wins > 0 ? `${wins}.0` : "0.0")
      : (wins / losses).toFixed(2);

  return {
    warsPlayed,
    avgScore,
    winLossRatio,
    mvps,
    wins,
    losses,
  };
}

export function getPlayerWars(playerId, wars) {
  return wars.filter((war) =>
    war.teams.some((team) =>
      Array.isArray(team.players) &&
      team.players.some(
        (p) => p.player_id === playerId || p.player_name?.toLowerCase() === playerId.toLowerCase()
      )
    )
  );
}
