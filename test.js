//Mechanics of the Game
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
//Object to store player data

const newPlayer = (playerName) => ({
  playerName,
  goldCount : 20,
  heroList : [],
  treasureInventory : [],
});

const playerList = [];

// Heroes:
/**
 * { name: string, attack: number from 1- 10, movement: number from 1 to 5, questing number 1 - 10, special: fn}
 */
const MakeHero = (name, attack, movement, questing, cost, special) => ({
  name,
  attack,
  movement,
  questing,
  cost,
  special
});
const CaoCao = MakeHero('Cao Cao', 8, 2, 1, 5);
const AlexanderTheGreat = MakeHero('Alexander The Great', 7, 4, 3, 5);
// Treasures
const treasureMaker

// Questing Bosses
/**
 *
 * @param {*} name, Use Strings
 * @param {*} questPoints, Use Numbers
 * @param {*} treasure {treasureName,treasureEffect}, Use Object
 */
const makeQuestBoss = (name, questPoints, treasureName) => ({
  name,
  questPoints,
  treasureName
});
const AzureDragon = makeQuestBoss('Azure Dragon', 9, 'Sword of Light');

//Mechanics on Obtaining Hero

const purchaseHero = (player, hero) => {
  if (player.goldCount >= hero.cost) {
    if (confirm('Purchase ' + hero.name + '?')) {
      console.log(hero.name + ' has joined ' + player.playerName);
      player.heroList.push(hero);
    } else console.log(hero.name + ' has not been purchased.');
  } else console.log('Insufficient Gold');
};

//Battles
/**
 *
 * @param {*} attacker
 * @param {*} defender
 */
const battle = (attacker, defender) => {
  // takes difference between attack stats of both hero and apply the number to the dice
  // and any number> 5 is winning
  // and if you win take over city
  let winning = undefined;
  if (attacker.attack > defender.attack) {
    winning = attacker.attack - defender.attack + getRandomArbitrary(1, 10);
  } else if (defender.attack > attacker.attack) {
    winning = getRandomArbitrary(1, 10) - defender.attack + attacker.attack;
  } else {
    winning = getRandomArbitrary(1, 10);
  }

  if (winning > 5) {
    console.log('Sieged');
  } else {
    console.log('Defended');
  }
};
const bossRaid = (hero, boss) => {
  //takes in the questing Points for the boss
  //takes in the questing attribute for the hero
  //the boss required point divide by the hero questing is the required turns to take the boss down;
  let StartingTurn = 0;
  for (
    StartingTurn = 0;
    StartingTurn < boss.questPoints / hero.questing;
    StartingTurn++
  ) {
    console.log(
      boss.questPoints / hero.questing - StartingTurn + ' Turn Remaining'
    );
  }
  console.log(
    boss.name +
      ' has been defeated by ' +
      hero.name +
      '. ' +
      boss.treasureName +
      ' has been obtained.'
  );
};
