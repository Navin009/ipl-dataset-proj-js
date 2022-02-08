import Match from "./Match.js";
import Delivery from "./Delivery.js";
import fs from "fs";

let matchesFile = fs.readFileSync("./data/matches.csv", "utf8");

let matches = [];
matchesFile = matchesFile.split("\r\n");

for (let i = 1; i < matchesFile.length; i++) {
	let row = matchesFile[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
	let match = new Match();
	match.id = row[0];
	match.season = row[1];
	match.city = row[2];
	match.date = row[3];
	match.team1 = row[4];
	match.team2 = row[5];
	match.tossWinner = row[6];
	match.tossDecision = row[7];
	match.result = row[8];
	match.dlWinner = row[9];
	match.winner = row[10];
	match.winByRuns = row[11];
	match.winByWickets = row[12];
	match.playerOfMatch = row[13];
	match.venue = row[14];
	match.umpire1 = row[15];
	match.umpire2 = row[16];
	match.umpire3 = row[17];

	matches.push(match);
}

let deliveriesFile = fs.readFileSync("./data/deliveries.csv", "utf-8");

deliveriesFile = deliveriesFile.split("\r\n");
let deliveries = [];

for (let i = 1; i < deliveriesFile.length; i++) {
	let row = deliveriesFile[i].split(",");

	let delivery = new Delivery();
	delivery.matchId = row[0];
	delivery.inning = row[1];
	delivery.battingTeam = row[2];
	delivery.bowlingTeam = row[3];
	delivery.over = row[4];
	delivery.ball = row[5];
	delivery.batsman = row[6];
	delivery.nonStriker = row[7];
	delivery.bowler = row[8];
	delivery.isSuperOver = row[9];
	delivery.wideRuns = row[10];
	delivery.byeRuns = row[11];
	delivery.legbyeRuns = row[12];
	delivery.noballRuns = row[13];
	delivery.penaltyRuns = row[14];
	delivery.batsmanRuns = row[15];
	delivery.extraRuns = row[16];
	delivery.totalRuns = row[17];
	delivery.playerDismissed = row[18];
	delivery.dismissalKind = row[19];
	delivery.fielder = row[20];

	deliveries.push(delivery);
}

function showMatchesPlayedPerYear() {
	let yearWiseMatches = {};
	matches.forEach((match) => {
		let year = match.season;
		if (yearWiseMatches[year]) {
			yearWiseMatches[year]++;
		} else {
			yearWiseMatches[year] = 1;
		}
	});
	console.log(yearWiseMatches);
}

function showMatchesWonPerTeamPerYear() {
	let yearWiseMatchesWon = {};
	matches.forEach((match) => {
		let year = match.season;
		let winner = match.winner;
		if (yearWiseMatchesWon[winner]) {
			if (yearWiseMatchesWon[winner][year]) {
				yearWiseMatchesWon[winner][year]++;
			} else {
				yearWiseMatchesWon[winner][year] = 1;
			}
		} else {
			yearWiseMatchesWon[winner] = {};
			yearWiseMatchesWon[winner][year] = 1;
		}
	});
	console.log(yearWiseMatchesWon);
}

function showExtraRunsConcededPerTeamByYear2016() {
	let teamWiseExtraRuns = {};
	const matchIds = new Set();
	matches.forEach((match) => {
		if (match.season == "2016") {
			matchIds.add(match.id);
		}
	});
	deliveries.forEach((delivery) => {
		if (matchIds.has(delivery.matchId)) {
			let team = delivery.battingTeam;
			if (teamWiseExtraRuns[team]) {
				teamWiseExtraRuns[team] += parseInt(delivery.extraRuns);
			} else {
				teamWiseExtraRuns[team] = parseInt(delivery.extraRuns);
			}
		}
	});
	console.log(teamWiseExtraRuns);
}

function showEconomicalBowlersOf2015() {
	let bowlerByRunsAndBalls = {};
	const matchIds = new Set();
	matches.forEach((match) => {
		if (match.season == "2015") {
			matchIds.add(match.id);
		}
	});
	deliveries.forEach((delivery) => {
		if (matchIds.has(delivery.matchId)) {
			let bowler = delivery.bowler;
			if (bowlerByRunsAndBalls[bowler]) {
				bowlerByRunsAndBalls[bowler] = [
					bowlerByRunsAndBalls[bowler][0] + parseInt(delivery.totalRuns),
					bowlerByRunsAndBalls[bowler][1] + 1,
				];
			} else {
				bowlerByRunsAndBalls[bowler] = [parseInt(delivery.totalRuns), 1];
			}
		}
	});

	let bowlerByEconomy = new Map();
	for (let bowler in bowlerByRunsAndBalls) {
		bowlerByEconomy.set(bowler, bowlerByRunsAndBalls[bowler][0] / (bowlerByRunsAndBalls[bowler][1] / 6));
	}
	let sortedBowlers = [...bowlerByEconomy.entries()].sort((a, b) => a[1] - b[1]);
	console.log(sortedBowlers);
}

function showTieMatchesInAllSeasons() {
	let tieMatches = [];
	matches.forEach((match) => {
		if (match.result == "tie") {
			tieMatches.push(match);
		}
	});
	console.log(tieMatches);
}

showMatchesPlayedPerYear();
showMatchesWonPerTeamPerYear();
showExtraRunsConcededPerTeamByYear2016();
showEconomicalBowlersOf2015();
showTieMatchesInAllSeasons();
