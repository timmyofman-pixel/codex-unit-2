// Level 11 — Call provided function with args (10 calls)
// Helper provided for students; call it 10 times and save results to descriptive consts.

export function reportScore(playerName, score) {
  return playerName + " scored " + score + " points";
}

const avaScoreReport = reportScore("Ava", 0);
const liamScoreReport = reportScore("Liam", 10);
const noahScoreReport = reportScore("Noah", 25);
const oliverScoreReport = reportScore("Oliver", 32);
const emmaScoreReport = reportScore("Emma", 48);
const charlotteScoreReport = reportScore("Charlotte", 55);
const ameliaScoreReport = reportScore("Amelia", 61);
const sophiaScoreReport = reportScore("Sophia", 74);
const jamesScoreReport = reportScore("James", 89);
const lucasScoreReport = reportScore("Lucas", 99);

export default lucasScoreReport;
