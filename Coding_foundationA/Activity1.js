function sinking(participant,rounds){
  let remainingPs = participant;
  const GroupPerRound = rounds;
  const winners = [];

  for (let i = 0; i < GroupPerRound.length; i++) {
    const Groupsize = GroupPerRound[i];
    const Grouped = Math.floor(remainingPs/Groupsize);
    const PsLeft = Grouped * Groupsize
    remainingPs = PsLeft;
    winners.push(PsLeft)
  }

  return winners[winners.length - 1];
}

console.log(sinking(32,[3,24,2,6,1,3,5]));
console.log(sinking(165,[32,23,2,3,51,21,23]));
console.log(sinking(22,[1,1,1,1,2,2,2,3,4,5,3]));
console.log(sinking(62,[60,59,56,45,32,22,11,4]));








