class Delivery {
	constructor(
		matchId,
		inning,
		battingTeam,
		bowlingTeam,
		over,
		ball,
		batsman,
		nonStriker,
		bowler,
		isSuperOver,
		wideRuns,
		byeRuns,
		legbyeRuns,
		noballRuns,
		penaltyRuns,
		batsmanRuns,
		extraRuns,
		totalRuns,
		playerDismissed,
		dismissalKind,
		fielder
	) {
		this.matchId = matchId;
		this.inning = inning;
		this.battingTeam = battingTeam;
		this.bowlingTeam = bowlingTeam;
		this.over = over;
		this.ball = ball;
		this.batsman = batsman;
		this.nonStriker = nonStriker;
		this.bowler = bowler;
		this.isSuperOver = isSuperOver;
		this.wideRuns = wideRuns;
		this.byeRuns = byeRuns;
		this.legbyeRuns = legbyeRuns;
		this.noballRuns = noballRuns;
		this.penaltyRuns = penaltyRuns;
		this.batsmanRuns = batsmanRuns;
		this.extraRuns = extraRuns;
		this.totalRuns = totalRuns;
		this.playerDismissed = playerDismissed;
		this.dismissalKind = dismissalKind;
		this.fielder = fielder;
	}
}

export default Delivery;
