class Match {
	constructor(
		id,
		season,
		city,
		date,
		team1,
		team2,
		tossWinner,
		tossDecision,
		result,
		dlApplied,
		winner,
		winByRuns,
		winByWickets,
		playerOfMatch,
		venue,
		umpire1,
		umpire2,
		umpire3
	) {
		this.id = id;
		this.season = season;
		this.city = city;
		this.date = date;
		this.team1 = team1;
		this.team2 = team2;
		this.tossWinner = tossWinner;
		this.tossDecision = tossDecision;
		this.result = result;
		this.dlApplied = dlApplied;
		this.winner = winner;
		this.winByRuns = winByRuns;
		this.winByWickets = winByWickets;
		this.playerOfMatch = playerOfMatch;
		this.venue = venue;
		this.umpire1 = umpire1;
		this.umpire2 = umpire2;
		this.umpire3 = umpire3;
	}
}

export default Match;
