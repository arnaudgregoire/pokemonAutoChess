/* eslint-disable max-len */

const schema = require('@colyseus/schema');
const Schema = schema.Schema;
const uniqid = require('uniqid');
const ArraySchema = schema.ArraySchema;
const {TYPE, RARITY, COST, ATTACK_TYPE} = require('./enum');
//const ItemFactory = require('./item-factory');
const Items = require('./items');

class Pokemon extends Schema {
  constructor(name, types, rarity, index, evolution, hp, atk, def, speDef, range, attackSprite, attackType, stars) {
    super();
    this.assign({
      id: uniqid(),
      name: name,
      types: new ArraySchema(),
      items: new Items(),
      rarity: rarity,
      index: index,
      evolution: evolution,
      positionX: -1,
      positionY: -1,
      cost: COST[rarity],
      hp: hp,
      atk: atk,
      def: def,
      speDef: speDef,
      range: range,
      attackSprite: attackSprite,
      atkSpeed: 1000,
      attackType: attackType,
      stars: stars
    });

    //this.items.add(ItemFactory.createRandomStone());
    if (types) {
      types.forEach((type) => {
        this.types.push(type);
      });
    }
  }

  toString() {
    return `Pokemon (Name: ${this.name}, (x: ${this.positionX}, y: ${this.positionY}))`;
  }
}

class Ditto extends Pokemon{
  constructor() {
    super('ditto', [TYPE.NORMAL], RARITY.LEGENDARY, 132, '', 30, 1, 1, 1, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Riolu extends Pokemon {
  constructor() {
    super('riolu', [TYPE.FIGHTING, TYPE.HUMAN], RARITY.LEGENDARY, 447, 'lucario', 90, 5, 1, 1, 2, 'FIGHTING/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Lucario extends Pokemon {
  constructor() {
    super('lucario', [TYPE.FIGHTING, TYPE.HUMAN], RARITY.LEGENDARY, 448, 'mega-lucario', 130, 9, 1, 1, 2, 'FIGHTING/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class MegaLucario extends Pokemon {
  constructor() {
    super('mega-lucario', [TYPE.FIGHTING, TYPE.HUMAN], RARITY.LEGENDARY, 4480, '', 230, 16, 1, 1, 2, 'FIGHTING/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Scyther extends Pokemon {
  constructor() {
    super('scyther', [TYPE.BUG, TYPE.NORMAL], RARITY.LEGENDARY, 123, 'scizor', 90, 5, 5, 5, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Scizor extends Pokemon {
  constructor() {
    super('scizor', [TYPE.BUG, TYPE.METAL], RARITY.LEGENDARY, 212, 'mega-scizor', 130, 9, 5, 5, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class MegaScizor extends Pokemon {
  constructor() {
    super('mega-scizor', [TYPE.BUG, TYPE.METAL], RARITY.LEGENDARY, 2120, '', 230, 16, 2, 5, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Onix extends Pokemon {
  constructor() {
    super('onix', [TYPE.MINERAL, TYPE.GROUND], RARITY.LEGENDARY, 95, 'steelix', 90, 5, 5, 5, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Steelix extends Pokemon {
  constructor() {
    super('steelix', [TYPE.MINERAL, TYPE.GROUND, TYPE.METAL], RARITY.LEGENDARY, 208, 'mega-steelix', 130, 9, 5, 5, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class MegaSteelix extends Pokemon {
  constructor() {
    super('mega-steelix', [TYPE.MINERAL, TYPE.GROUND, TYPE.METAL], RARITY.LEGENDARY, 2080, '', 230, 16, 5, 5, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Growlithe extends Pokemon {
  constructor() {
    super('growlithe', [TYPE.FIRE, TYPE.FIELD], RARITY.LEGENDARY, 58, 'arcanine', 90, 9, 5, 5, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Arcanine extends Pokemon {
  constructor() {
    super('arcanine', [TYPE.FIRE, TYPE.FIELD], RARITY.LEGENDARY, 59, '', 130, 16, 5, 5, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Numel extends Pokemon{
  constructor(){
    super('numel',[TYPE.FIRE,TYPE.FIELD,TYPE.GROUND], RARITY.LEGENDARY, 322, 'camerupt', 90, 5, 5, 5, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Camerupt extends Pokemon{
  constructor(){
    super('camerupt',[TYPE.FIRE,TYPE.FIELD,TYPE.GROUND], RARITY.LEGENDARY, 323, 'mega-camerupt', 150, 9, 10, 10, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class MegaCamerupt extends Pokemon{
  constructor(){
  super('mega-camerupt',[TYPE.FIRE,TYPE.FIELD,TYPE.GROUND], RARITY.LEGENDARY, 3230, '', 230, 16, 15, 15, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Munchlax extends Pokemon {
  constructor() {
    super('munchlax', [TYPE.NORMAL, TYPE.HUMAN], RARITY.LEGENDARY, 446, 'snorlax', 90, 9, 5, 5, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Snorlax extends Pokemon {
  constructor() {
    super('snorlax', [TYPE.NORMAL, TYPE.HUMAN], RARITY.LEGENDARY, 143, '', 130, 16, 5, 5, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Meditite extends Pokemon{
  constructor(){
    super('meditite', [TYPE.NORMAL, TYPE.HUMAN, TYPE.FIGHTING], RARITY.LEGENDARY, 307, 'medicham', 90, 5, 1, 1, 2, 'PSYCHIC/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Medicham extends Pokemon{
  constructor(){
    super('medicham', [TYPE.NORMAL, TYPE.HUMAN, TYPE.FIGHTING], RARITY.LEGENDARY, 308, 'mega-medicham', 130, 9, 5, 5, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class MegaMedicham extends Pokemon{
  constructor(){
    super('mega-medicham', [TYPE.NORMAL, TYPE.HUMAN, TYPE.FIGHTING], RARITY.LEGENDARY, 3080, '', 230, 16, 5, 5, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Magby extends Pokemon {
  constructor() {
    super('magby', [TYPE.FIRE, TYPE.HUMAN], RARITY.EPIC, 240, 'magmar', 90, 5, 1, 1, 2, 'FIRE/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Magmar extends Pokemon {
  constructor() {
    super('magmar', [TYPE.FIRE, TYPE.HUMAN], RARITY.EPIC, 126, 'magmortar', 130, 9, 1, 1, 2, 'FIRE/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Magmortar extends Pokemon {
  constructor() {
    super('magmortar', [TYPE.FIRE, TYPE.HUMAN], RARITY.EPIC, 467, '', 230, 16, 1, 1, 2, 'FIRE/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Elekid extends Pokemon {
  constructor() {
    super('elekid', [TYPE.ELECTRIC, TYPE.HUMAN], RARITY.EPIC, 239, 'electabuzz', 90, 5, 4,4, 1, 'ELECTRIC/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Electabuzz extends Pokemon {
  constructor() {
    super('electabuzz', [TYPE.ELECTRIC, TYPE.HUMAN], RARITY.EPIC, 125, 'electivire', 130, 9, 4,4, 1, 'ELECTRIC/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Electivire extends Pokemon {
  constructor() {
    super('electivire', [TYPE.ELECTRIC, TYPE.HUMAN], RARITY.EPIC, 466, '', 230, 16, 4,4, 1, 'ELECTRIC/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Gible extends Pokemon {
  constructor() {
    super('gible', [TYPE.DRAGON, TYPE.GROUND, TYPE.MONSTER], RARITY.EPIC, 443, 'gabite', 90, 5, 4,4, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Gabite extends Pokemon {
  constructor() {
    super('gabite', [TYPE.DRAGON, TYPE.GROUND, TYPE.MONSTER], RARITY.EPIC, 444, 'garchomp', 130, 9, 4,4, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Garchomp extends Pokemon {
  constructor() {
    super('garchomp', [TYPE.DRAGON, TYPE.GROUND, TYPE.MONSTER], RARITY.EPIC, 445, '', 230, 16, 4,4, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Beldum extends Pokemon {
  constructor() {
    super('beldum', [TYPE.PSYCHIC, TYPE.METAL, TYPE.MINERAL], RARITY.EPIC, 374, 'metang', 90, 5, 4,4, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Metang extends Pokemon {
  constructor() {
    super('metang', [TYPE.PSYCHIC, TYPE.METAL, TYPE.MINERAL], RARITY.EPIC, 375, 'metagross', 130, 9, 4,4, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Metagross extends Pokemon {
  constructor() {
    super('metagross', [TYPE.PSYCHIC, TYPE.METAL, TYPE.MINERAL], RARITY.EPIC, 376, '', 230, 16, 4,4, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Bagon extends Pokemon {
  constructor() {
    super('bagon', [TYPE.DRAGON, TYPE.MONSTER], RARITY.EPIC, 371, 'shelgon', 90, 5, 1, 1, 2, 'FIRE/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Shelgon extends Pokemon {
  constructor() {
    super('shelgon', [TYPE.DRAGON, TYPE.MONSTER], RARITY.EPIC, 372, 'salamence', 130, 9, 1, 1, 2, 'FIRE/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Salamence extends Pokemon {
  constructor() {
    super('salamence', [TYPE.DRAGON, TYPE.MONSTER], RARITY.EPIC, 373, '', 230, 16, 1, 1, 2, 'FIRE/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Ralts extends Pokemon {
  constructor() {
    super('ralts', [TYPE.PSYCHIC, TYPE.AMORPH], RARITY.EPIC, 280, 'kirlia', 90, 5, 1, 1, 3, 'PSYCHIC/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Kirlia extends Pokemon {
  constructor() {
    super('kirlia', [TYPE.PSYCHIC, TYPE.AMORPH], RARITY.EPIC, 281, 'gardevoir', 130, 9, 1, 1, 3, 'PSYCHIC/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Gardevoir extends Pokemon {
  constructor() {
    super('gardevoir', [TYPE.PSYCHIC, TYPE.AMORPH], RARITY.EPIC, 282, '', 230, 16, 1, 1, 3, 'PSYCHIC/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Slakoth extends Pokemon {
  constructor() {
    super('slakoth', [TYPE.NORMAL, TYPE.HUMAN], RARITY.EPIC, 287, 'vigoroth', 90, 5, 4,4, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Vigoroth extends Pokemon {
  constructor() {
    super('vigoroth', [TYPE.NORMAL, TYPE.HUMAN], RARITY.EPIC, 288, 'slaking', 130, 9, 4,4, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Slaking extends Pokemon {
  constructor() {
    super('slaking', [TYPE.NORMAL, TYPE.HUMAN], RARITY.EPIC, 289, '', 230, 16, 4,4, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Larvitar extends Pokemon {
  constructor() {
    super('larvitar', [TYPE.DARK, TYPE.MONSTER, TYPE.MINERAL], RARITY.EPIC, 246, 'pupitar', 90, 8, 4,4, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Pupitar extends Pokemon {
  constructor() {
    super('pupitar', [TYPE.DARK, TYPE.MONSTER, TYPE.MINERAL], RARITY.EPIC, 247, 'tyranitar', 130, 9, 4,4, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Tyranitar extends Pokemon {
  constructor() {
    super('tyranitar', [TYPE.DARK, TYPE.MONSTER, TYPE.MINERAL], RARITY.EPIC, 248, '', 230, 16, 4,4, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Dratini extends Pokemon {
  constructor() {
    super('dratini', [TYPE.DRAGON, TYPE.AQUATIC], RARITY.EPIC, 147, 'dragonair', 90, 5, 4,4, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Dragonair extends Pokemon {
  constructor() {
    super('dragonair', [TYPE.DRAGON, TYPE.AQUATIC], RARITY.EPIC, 148, 'dragonite', 130, 9, 4,4, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Dragonite extends Pokemon {
  constructor() {
    super('dragonite', [TYPE.DRAGON, TYPE.AQUATIC, TYPE.FLYING], RARITY.EPIC, 149, '', 230, 16, 4,4, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Gastly extends Pokemon {
  constructor() {
    super('gastly', [TYPE.DARK, TYPE.POISON, TYPE.AMORPH], RARITY.EPIC, 92, 'haunter', 90, 5, 1,1, 2, 'GHOST/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Haunter extends Pokemon {
  constructor() {
    super('haunter', [TYPE.DARK, TYPE.POISON, TYPE.AMORPH], RARITY.EPIC, 93, 'gengar', 130, 9, 1, 1, 2, 'GHOST/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Gengar extends Pokemon {
  constructor() {
    super('gengar', [TYPE.DARK, TYPE.POISON, TYPE.AMORPH], RARITY.EPIC, 94, '', 230, 16, 1, 1, 2, 'GHOST/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Abra extends Pokemon {
  constructor() {
    super('abra', [TYPE.PSYCHIC, TYPE.HUMAN], RARITY.EPIC, 63, 'kadabra', 90, 5, 1, 1, 3, 'PSYCHIC/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Kadabra extends Pokemon {
  constructor() {
    super('kadabra', [TYPE.PSYCHIC, TYPE.HUMAN], RARITY.EPIC, 64, 'alakazam', 130, 9, 1, 1, 3, 'PSYCHIC/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Alakazam extends Pokemon {
  constructor() {
    super('alakazam', [TYPE.PSYCHIC, TYPE.HUMAN], RARITY.EPIC, 65, '', 230, 16, 1, 1, 3, 'PSYCHIC/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Poliwag extends Pokemon {
  constructor() {
    super('poliwag', [TYPE.WATER, TYPE.AQUATIC], RARITY.RARE, 60, 'poliwhirl', 80, 5, 1, 1, 2, 'WATER/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Poliwhirl extends Pokemon {
  constructor() {
    super('poliwhirl', [TYPE.WATER, TYPE.FIGHTING, TYPE.AQUATIC], RARITY.RARE, 61, 'politoed', 120, 9, 1, 1, 2, 'WATER/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Politoed extends Pokemon {
  constructor() {
    super('politoed', [TYPE.WATER, TYPE.AQUATIC], RARITY.RARE, 186, '', 220, 16, 1, 1, 2, 'WATER/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Shinx extends Pokemon {
  constructor() {
    super('shinx', [TYPE.ELECTRIC, TYPE.FIELD], RARITY.RARE, 403, 'luxio', 80, 5, 4,4, 1, 'ELECTRIC/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Luxio extends Pokemon {
  constructor() {
    super('luxio', [TYPE.ELECTRIC, TYPE.FIELD], RARITY.RARE, 404, 'luxray', 120, 9, 4,4, 1, 'ELECTRIC/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Luxray extends Pokemon {
  constructor() {
    super('luxray', [TYPE.ELECTRIC, TYPE.FIELD], RARITY.RARE, 405, '', 220, 16, 4,4, 1, 'ELECTRIC/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Lotad extends Pokemon {
  constructor() {
    super('lotad', [TYPE.GRASS, TYPE.WATER, TYPE.AQUATIC], RARITY.RARE, 270, 'lombre', 80, 5, 1, 1, 2, 'GRASS/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Lombre extends Pokemon {
  constructor() {
    super('lombre', [TYPE.GRASS, TYPE.WATER, TYPE.AQUATIC], RARITY.RARE, 271, 'ludicolo', 120, 9, 1, 1, 2, 'GRASS/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Ludicolo extends Pokemon {
  constructor() {
    super('ludicolo', [TYPE.GRASS, TYPE.WATER, TYPE.AQUATIC], RARITY.RARE, 272, '', 220, 16, 1, 1, 2, 'GRASS/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Duskull extends Pokemon {
  constructor() {
    super('duskull', [TYPE.DARK, TYPE.AMORPH], RARITY.RARE, 355, 'dusclops', 80, 5, 1, 1, 2, 'GHOST/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Dusclops extends Pokemon {
  constructor() {
    super('dusclops', [TYPE.DARK, TYPE.AMORPH], RARITY.RARE, 356, 'dusknoir', 120, 9, 1, 1, 2, 'GHOST/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Dusknoir extends Pokemon {
  constructor() {
    super('dusknoir', [TYPE.DARK, TYPE.AMORPH], RARITY.RARE, 477, '', 220, 16, 1, 1, 2, 'GHOST/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Togepi extends Pokemon {
  constructor() {
    super('togepi', [TYPE.NORMAL, TYPE.FAIRY, TYPE.PSYCHIC], RARITY.RARE, 175, 'togetic', 80, 5, 1, 1, 2, 'FLYING/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Togetic extends Pokemon {
  constructor() {
    super('togetic', [TYPE.NORMAL, TYPE.FAIRY, TYPE.PSYCHIC], RARITY.RARE, 176, 'togekiss', 120, 9, 1, 1, 2, 'FLYING/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Togekiss extends Pokemon {
  constructor() {
    super('togekiss', [TYPE.NORMAL, TYPE.FAIRY, TYPE.PSYCHIC], RARITY.RARE, 468, '', 220, 16, 1, 1, 2, 'FLYING/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Rhyhorn extends Pokemon {
  constructor() {
    super('rhyhorn', [TYPE.GROUND, TYPE.MONSTER, TYPE.MINERAL], RARITY.RARE, 111, 'rhydon', 80, 5, 4,4, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Rhydon extends Pokemon {
  constructor() {
    super('rhydon', [TYPE.GROUND, TYPE.MONSTER, TYPE.MINERAL], RARITY.RARE, 112, 'rhyperior', 120, 9, 4,4, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Rhyperior extends Pokemon {
  constructor() {
    super('rhyperior', [TYPE.GROUND, TYPE.MONSTER, TYPE.MINERAL], RARITY.RARE, 464, '', 220, 16, 4,4, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Magnemite extends Pokemon {
  constructor() {
    super('magnemite', [TYPE.ELECTRIC, TYPE.METAL], RARITY.RARE, 81, 'magneton', 80, 5, 1, 1, 2, 'ELECTRIC/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Magneton extends Pokemon {
  constructor() {
    super('magneton', [TYPE.ELECTRIC, TYPE.METAL], RARITY.RARE, 82, 'magnezone', 120, 9, 1, 1, 2, 'ELECTRIC/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Magnezone extends Pokemon {
  constructor() {
    super('magnezone', [TYPE.ELECTRIC, TYPE.METAL], RARITY.RARE, 462, '', 220, 16, 1, 1, 2, 'ELECTRIC/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Aron extends Pokemon {
  constructor() {
    super('aron', [TYPE.METAL, TYPE.MONSTER, TYPE.MINERAL], RARITY.RARE, 304, 'lairon', 80, 5, 4,4, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Lairon extends Pokemon {
  constructor() {
    super('lairon', [TYPE.METAL, TYPE.MONSTER, TYPE.MINERAL], RARITY.RARE, 305, 'aggron', 120, 9, 4,4, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Aggron extends Pokemon {
  constructor() {
    super('aggron', [TYPE.METAL, TYPE.MONSTER, TYPE.MINERAL], RARITY.RARE, 306, '', 220, 16, 4,4, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Spheal extends Pokemon {
  constructor() {
    super('spheal', [TYPE.WATER, TYPE.FIELD], RARITY.RARE, 363, 'sealeo', 80, 5, 4,4, 1, 'ICE/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Sealeo extends Pokemon {
  constructor() {
    super('sealeo', [TYPE.WATER, TYPE.FIELD], RARITY.RARE, 364, 'walrein', 120, 9, 4,4, 1, 'ICE/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Walrein extends Pokemon {
  constructor() {
    super('walrein', [TYPE.WATER, TYPE.FIELD], RARITY.RARE, 365, '', 220, 16, 4,4, 1, 'ICE/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Trapinch extends Pokemon {
  constructor() {
    super('trapinch', [TYPE.GROUND, TYPE.BUG], RARITY.RARE, 328, 'vibrava', 80, 5, 4,4, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Vibrava extends Pokemon {
  constructor() {
    super('vibrava', [TYPE.GROUND, TYPE.DRAGON, TYPE.BUG], RARITY.RARE, 329, 'flygon', 120, 9, 4,4, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Flygon extends Pokemon {
  constructor() {
    super('flygon', [TYPE.GROUND, TYPE.DRAGON, TYPE.BUG], RARITY.RARE, 330, '', 220, 16, 4,4, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Horsea extends Pokemon {
  constructor() {
    super('horsea', [TYPE.WATER, TYPE.AQUATIC, TYPE.DRAGON], RARITY.RARE, 116, 'seadra', 80, 5, 1, 1, 2, 'WATER/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Seadra extends Pokemon {
  constructor() {
    super('seadra', [TYPE.WATER, TYPE.DRAGON, TYPE.AQUATIC], RARITY.RARE, 117, 'kingdra', 120, 9, 1, 1, 2, 'WATER/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Kingdra extends Pokemon {
  constructor() {
    super('kingdra', [TYPE.WATER, TYPE.DRAGON, TYPE.AQUATIC], RARITY.RARE, 230, '', 220, 16, 1, 1, 2, 'WATER/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Machop extends Pokemon {
  constructor() {
    super('machop', [TYPE.FIGHTING, TYPE.HUMAN], RARITY.RARE, 66, 'machoke', 80, 5, 4,4, 1, 'FIGHTING/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Machoke extends Pokemon {
  constructor() {
    super('machoke', [TYPE.FIGHTING, TYPE.HUMAN], RARITY.RARE, 67, 'machamp', 120, 9, 4,4, 1, 'FIGHTING/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Machamp extends Pokemon {
  constructor() {
    super('machamp', [TYPE.FIGHTING, TYPE.HUMAN], RARITY.RARE, 68, '', 220, 16, 4,4, 1, 'FIGHTING/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Pichu extends Pokemon {
  constructor() {
    super('pichu', [TYPE.ELECTRIC, TYPE.FAIRY], RARITY.RARE, 172, 'pikachu', 80, 5, 1,1, 2, 'ELECTRIC/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Pikachu extends Pokemon {
  constructor() {
    super('pikachu', [TYPE.ELECTRIC, TYPE.FAIRY], RARITY.RARE, 25, 'raichu', 120, 9, 1, 1, 2, 'ELECTRIC/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Raichu extends Pokemon {
  constructor() {
    super('raichu', [TYPE.ELECTRIC, TYPE.FAIRY], RARITY.RARE, 26, '', 220, 16, 1, 1, 2, 'ELECTRIC/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Bulbasaur extends Pokemon {
  constructor() {
    super('bulbasaur', [TYPE.GRASS, TYPE.POISON, TYPE.FLORA], RARITY.UNCOMMON, 1, 'ivysaur', 70, 5, 1, 1, 2, 'GRASS/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Ivysaur extends Pokemon {
  constructor() {
    super('ivysaur', [TYPE.GRASS, TYPE.POISON, TYPE.FLORA], RARITY.UNCOMMON, 2, 'venusaur', 120, 9, 1, 1, 2, 'GRASS/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Venusaur extends Pokemon {
  constructor() {
    super('venusaur', [TYPE.GRASS, TYPE.POISON, TYPE.FLORA], RARITY.UNCOMMON, 3, '', 210, 16, 1, 1, 2, 'GRASS/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Chikorita extends Pokemon {
  constructor() {
    super('chikorita', [TYPE.GRASS, TYPE.FLORA], RARITY.UNCOMMON, 152, 'bayleef', 70, 5, 1, 1, 2, 'GRASS/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Bayleef extends Pokemon {
  constructor() {
    super('bayleef', [TYPE.GRASS, TYPE.FLORA], RARITY.UNCOMMON, 153, 'meganium', 120, 9, 1, 1, 2, 'GRASS/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Meganium extends Pokemon {
  constructor() {
    super('meganium', [TYPE.GRASS, TYPE.FLORA], RARITY.UNCOMMON, 154, '', 210, 16, 1, 1, 2, 'GRASS/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class NidoranF extends Pokemon {
  constructor() {
    super('nidoranF', [TYPE.POISON, TYPE.FIELD], RARITY.UNCOMMON, 29, 'nidorina', 70, 5, 3,2, 1, 'POISON/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Nidorina extends Pokemon {
  constructor() {
    super('nidorina', [TYPE.POISON, TYPE.FIELD], RARITY.UNCOMMON, 30, 'nidoqueen', 120, 9, 3,2, 1, 'POISON/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Nidoqueen extends Pokemon {
  constructor() {
    super('nidoqueen', [TYPE.POISON, TYPE.FIELD], RARITY.UNCOMMON, 31, '', 210, 16, 3, 3, 1, 'POISON/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class NidoranM extends Pokemon {
  constructor() {
    super('nidoranM', [TYPE.POISON, TYPE.FIELD], RARITY.UNCOMMON, 32, 'nidorino', 70, 5, 3, 3, 1, 'POISON/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Nidorino extends Pokemon {
  constructor() {
    super('nidorino', [TYPE.POISON, TYPE.FIELD], RARITY.UNCOMMON, 33, 'nidoking', 120, 9, 3, 3, 1, 'POISON/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Nidoking extends Pokemon {
  constructor() {
    super('nidoking', [TYPE.POISON, TYPE.FIELD], RARITY.UNCOMMON, 34, '', 210, 16, 3, 3, 1, 'POISON/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Piplup extends Pokemon {
  constructor() {
    super('piplup', [TYPE.WATER, TYPE.FLYING], RARITY.UNCOMMON, 393, 'prinplup', 70, 5, 3, 3, 1, 'WATER/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Prinplup extends Pokemon {
  constructor() {
    super('prinplup', [TYPE.WATER, TYPE.FLYING, TYPE.METAL], RARITY.UNCOMMON, 394, 'empoleon', 120, 9, 3, 3, 1, 'WATER/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Empoleon extends Pokemon {
  constructor() {
    super('empoleon', [TYPE.WATER, TYPE.FLYING, TYPE.METAL], RARITY.UNCOMMON, 395, '', 210, 16, 3, 3, 1, 'WATER/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Chimchar extends Pokemon {
  constructor() {
    super('chimchar', [TYPE.FIRE, TYPE.HUMAN], RARITY.UNCOMMON, 390, 'monferno', 70, 5, 3, 3, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Monferno extends Pokemon {
  constructor() {
    super('monferno', [TYPE.FIRE, TYPE.HUMAN, TYPE.FIGHTING], RARITY.UNCOMMON, 391, 'infernape', 120, 9, 3, 3, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Infernape extends Pokemon {
  constructor() {
    super('infernape', [TYPE.FIRE, TYPE.HUMAN, TYPE.FIGHTING], RARITY.UNCOMMON, 392, '', 210, 16, 3, 3, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Turtwig extends Pokemon {
  constructor() {
    super('turtwig', [TYPE.GRASS, TYPE.GROUND, TYPE.FLORA], RARITY.UNCOMMON, 387, 'grotle', 70, 5, 3, 3, 1, 'GRASS/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Grotle extends Pokemon {
  constructor() {
    super('grotle', [TYPE.GRASS, TYPE.GROUND, TYPE.FLORA], RARITY.UNCOMMON, 388, 'torterra', 120, 9, 3, 3, 1, 'GRASS/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Torterra extends Pokemon {
  constructor() {
    super('torterra', [TYPE.GRASS, TYPE.GROUND, TYPE.FLORA], RARITY.UNCOMMON, 389, '', 210, 16, 3, 3, 1, 'GRASS/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Mudkip extends Pokemon {
  constructor() {
    super('mudkip', [TYPE.WATER, TYPE.GROUND], RARITY.UNCOMMON, 258, 'marshtomp', 70, 5, 3, 3, 1, 'WATER/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Marshtomp extends Pokemon {
  constructor() {
    super('marshtomp', [TYPE.WATER, TYPE.GROUND], RARITY.UNCOMMON, 259, 'swampert', 120, 9, 3, 3, 1, 'WATER/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Swampert extends Pokemon {
  constructor() {
    super('swampert', [TYPE.WATER, TYPE.GROUND], RARITY.UNCOMMON, 260, '', 210, 16, 3, 3, 1, 'WATER/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Torchic extends Pokemon {
  constructor() {
    super('torchic', [TYPE.FIRE, TYPE.FLYING], RARITY.UNCOMMON, 255, 'combusken', 70, 5, 3, 3, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Combusken extends Pokemon {
  constructor() {
    super('combusken', [TYPE.FIRE, TYPE.FIGHTING, TYPE.FLYING], RARITY.UNCOMMON, 256, 'blaziken', 120, 9, 3, 3, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Blaziken extends Pokemon {
  constructor() {
    super('blaziken', [TYPE.FIRE, TYPE.FIGHTING, TYPE.FLYING], RARITY.UNCOMMON, 257, '', 210, 16, 3, 3, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Treecko extends Pokemon {
  constructor() {
    super('treecko', [TYPE.GRASS, TYPE.MONSTER], RARITY.UNCOMMON, 252, 'grovyle', 70, 5, 3, 3, 1, 'GRASS/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Grovyle extends Pokemon {
  constructor() {
    super('grovyle', [TYPE.GRASS, TYPE.MONSTER], RARITY.UNCOMMON, 253, 'sceptile', 120, 9, 3, 3, 1, 'GRASS/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Sceptile extends Pokemon {
  constructor() {
    super('sceptile', [TYPE.GRASS, TYPE.MONSTER], RARITY.UNCOMMON, 254, '', 210, 16, 3, 3, 1, 'GRASS/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Totodile extends Pokemon {
  constructor() {
    super('totodile', [TYPE.WATER, TYPE.AQUATIC], RARITY.UNCOMMON, 158, 'croconaw', 70, 5, 3, 3, 1, 'WATER/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Croconaw extends Pokemon {
  constructor() {
    super('croconaw', [TYPE.WATER, TYPE.AQUATIC], RARITY.UNCOMMON, 159, 'feraligatr', 120, 9, 3, 3, 1, 'WATER/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Feraligatr extends Pokemon {
  constructor() {
    super('feraligatr', [TYPE.WATER, TYPE.AQUATIC], RARITY.UNCOMMON, 160, '', 210, 16, 3, 3, 1, 'WATER/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Cyndaquil extends Pokemon {
  constructor() {
    super('cyndaquil', [TYPE.FIRE, TYPE.FIELD], RARITY.UNCOMMON, 155, 'quilava', 70, 5, 1, 1, 2, 'FIRE/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Quilava extends Pokemon {
  constructor() {
    super('quilava', [TYPE.FIRE, TYPE.FIELD], RARITY.UNCOMMON, 156, 'typhlosion', 120, 9, 1, 1, 2, 'FIRE/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Typhlosion extends Pokemon {
  constructor() {
    super('typhlosion', [TYPE.FIRE, TYPE.FIELD], RARITY.UNCOMMON, 157, '', 210, 16, 1, 1, 2, 'FIRE/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Charmander extends Pokemon {
  constructor() {
    super('charmander', [TYPE.FIRE, TYPE.MONSTER], RARITY.UNCOMMON, 4, 'charmeleon', 70, 5, 3, 3, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Charmeleon extends Pokemon {
  constructor() {
    super('charmeleon', [TYPE.FIRE, TYPE.MONSTER], RARITY.UNCOMMON, 5, 'charizard', 120, 9, 3, 3, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Charizard extends Pokemon {
  constructor() {
    super('charizard', [TYPE.FIRE, TYPE.MONSTER, TYPE.FLYING], RARITY.UNCOMMON, 6, '', 210, 16, 3, 3, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Squirtle extends Pokemon {
  constructor() {
    super('squirtle', [TYPE.WATER, TYPE.AQUATIC, TYPE.MONSTER], RARITY.UNCOMMON, 7, 'wartortle', 70, 5, 1, 1, 2, 'WATER/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Wartortle extends Pokemon {
  constructor() {
    super('wartortle', [TYPE.WATER, TYPE.AQUATIC, TYPE.MONSTER], RARITY.UNCOMMON, 8, 'blastoise', 120, 9, 1, 1, 2, 'WATER/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Blastoise extends Pokemon {
  constructor() {
    super('blastoise', [TYPE.WATER, TYPE.AQUATIC, TYPE.MONSTER], RARITY.UNCOMMON, 9, '', 210, 16, 1, 1, 2, 'WATER/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Geodude extends Pokemon {
  constructor() {
    super('geodude', [TYPE.GROUND, TYPE.MINERAL], RARITY.COMMON, 74, 'graveler', 60, 5, 2, 2, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Graveler extends Pokemon {
  constructor() {
    super('graveler', [TYPE.GROUND, TYPE.MINERAL], RARITY.COMMON, 75, 'golem', 110, 9, 2, 2, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Golem extends Pokemon {
  constructor() {
    super('golem', [TYPE.GROUND, TYPE.MINERAL], RARITY.COMMON, 76, '', 200, 16, 2, 2, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Azurill extends Pokemon {
  constructor() {
    super('azurill', [TYPE.WATER, TYPE.FAIRY], RARITY.COMMON, 298, 'marill', 60, 5, 1, 1, 2, 'WATER/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Marill extends Pokemon {
  constructor() {
    super('marill', [TYPE.WATER, TYPE.FAIRY], RARITY.COMMON, 183, 'azumarill', 110, 9, 1, 1, 2, 'WATER/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Azumarill extends Pokemon {
  constructor() {
    super('azumarill', [TYPE.WATER, TYPE.FAIRY], RARITY.COMMON, 184, '', 200, 16, 1, 1, 2, 'WATER/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Zubat extends Pokemon {
  constructor() {
    super('zubat', [TYPE.POISON, TYPE.FLYING], RARITY.COMMON, 41, 'golbat', 60, 5, 1, 1, 2, 'PSYCHIC/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Golbat extends Pokemon {
  constructor() {
    super('golbat', [TYPE.POISON, TYPE.FLYING], RARITY.COMMON, 42, 'crobat', 110, 9, 1, 1, 2, 'PSYCHIC/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Crobat extends Pokemon {
  constructor() {
    super('crobat', [TYPE.POISON, TYPE.FLYING], RARITY.COMMON, 169, '', 200, 16, 1, 1, 2, 'PSYCHIC/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Mareep extends Pokemon {
  constructor() {
    super('mareep', [TYPE.ELECTRIC, TYPE.FIELD], RARITY.COMMON, 179, 'flaffy', 60, 5, 1, 1, 2, 'ELECTRIC/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Flaffy extends Pokemon {
  constructor() {
    super('flaffy', [TYPE.ELECTRIC, TYPE.FIELD], RARITY.COMMON, 180, 'ampharos', 110, 9, 1, 1, 2, 'ELECTRIC/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Ampharos extends Pokemon {
  constructor() {
    super('ampharos', [TYPE.ELECTRIC, TYPE.FIELD], RARITY.COMMON, 181, '', 200, 16, 1, 1, 2, 'ELECTRIC/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Cleffa extends Pokemon {
  constructor() {
    super('cleffa', [TYPE.FAIRY, TYPE.NORMAL], RARITY.COMMON, 173, 'clefairy', 60, 5, 2, 2, 1, 'FAIRY/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Clefairy extends Pokemon {
  constructor() {
    super('clefairy', [TYPE.FAIRY, TYPE.NORMAL], RARITY.COMMON, 35, 'clefable', 110, 9, 2, 2, 1, 'FAIRY/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Clefable extends Pokemon {
  constructor() {
    super('clefable', [TYPE.FAIRY, TYPE.NORMAL], RARITY.COMMON, 36, '', 200, 16, 2, 2, 1, 'FAIRY/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Igglybuff extends Pokemon {
  constructor() {
    super('igglybuff', [TYPE.FAIRY, TYPE.NORMAL], RARITY.COMMON, 174, 'jigglypuff', 60, 5, 1, 1, 2, 'FAIRY/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Jigglypuff extends Pokemon {
  constructor() {
    super('jigglypuff', [TYPE.FAIRY, TYPE.NORMAL], RARITY.COMMON, 39, 'wigglytuff', 110, 9, 1, 1, 2, 'FAIRY/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Wigglytuff extends Pokemon {
  constructor() {
    super('wigglytuff', [TYPE.FAIRY, TYPE.NORMAL], RARITY.COMMON, 40, '', 200, 16, 1, 1, 2, 'FAIRY/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Caterpie extends Pokemon {
  constructor() {
    super('caterpie', [TYPE.GRASS, TYPE.BUG], RARITY.COMMON, 10, 'metapod', 60, 5, 1, 1, 2, 'POISON/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Metapod extends Pokemon {
  constructor() {
    super('metapod', [TYPE.GRASS, TYPE.BUG], RARITY.COMMON, 11, 'butterfree', 110, 9, 1, 1, 2, 'POISON/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Butterfree extends Pokemon {
  constructor() {
    super('butterfree', [TYPE.GRASS, TYPE.BUG, TYPE.FLYING], RARITY.COMMON, 12, '', 200, 16, 1, 1, 2, 'POISON/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Weedle extends Pokemon {
  constructor() {
    super('weedle', [TYPE.POISON, TYPE.BUG], RARITY.COMMON, 13, 'kakuna', 60, 5, 2, 2, 1, 'BUG/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Kakuna extends Pokemon {
  constructor() {
    super('kakuna', [TYPE.POISON, TYPE.BUG], RARITY.COMMON, 14, 'beedrill', 110, 9, 2, 2, 1, 'BUG/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Beedrill extends Pokemon {
  constructor() {
    super('beedrill', [TYPE.POISON, TYPE.BUG, TYPE.FLYING], RARITY.COMMON, 15, '', 200, 16, 2, 2, 1, 'BUG/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}


class Pidgey extends Pokemon {
  constructor() {
    super('pidgey', [TYPE.NORMAL, TYPE.FLYING], RARITY.COMMON, 16, 'pidgeotto', 60, 5, 1, 1, 2, 'FLYING/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Pidgeotto extends Pokemon {
  constructor() {
    super('pidgeotto', [TYPE.NORMAL, TYPE.FLYING], RARITY.COMMON, 17, 'pidgeot', 110, 9, 1, 1, 2, 'FLYING/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Pidgeot extends Pokemon {
  constructor() {
    super('pidgeot', [TYPE.NORMAL, TYPE.FLYING], RARITY.COMMON, 18, '', 200, 16, 1, 1, 2, 'FLYING/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Hoppip extends Pokemon {
  constructor() {
    super('hoppip', [TYPE.GRASS, TYPE.FLYING, TYPE.FLORA], RARITY.COMMON, 187, 'skiploom', 60, 5, 1, 1, 2, 'FLYING/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Skiploom extends Pokemon {
  constructor() {
    super('skiploom', [TYPE.GRASS, TYPE.FLYING, TYPE.FLORA], RARITY.COMMON, 188, 'jumpluff', 110, 9, 1, 1, 2, 'FLYING/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Jumpluff extends Pokemon {
  constructor() {
    super('jumpluff', [TYPE.GRASS, TYPE.FLYING, TYPE.FLORA], RARITY.COMMON, 189, '', 220, 16, 1, 1, 2, 'FLYING/range', ATTACK_TYPE.SPECIAL,3);
  }
}

class Seedot extends Pokemon {
  constructor() {
    super('seedot', [TYPE.GRASS, TYPE.DARK, TYPE.FIELD], RARITY.COMMON, 273, 'nuzleaf', 60, 5, 2, 2, 1, 'GRASS/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Nuzleaf extends Pokemon {
  constructor() {
    super('nuzleaf', [TYPE.GRASS, TYPE.DARK, TYPE.FIELD], RARITY.COMMON, 274, 'shiftry', 110, 9, 2, 2, 1, 'GRASS/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Shiftry extends Pokemon {
  constructor() {
    super('shiftry', [TYPE.GRASS, TYPE.DARK, TYPE.FIELD], RARITY.COMMON, 275, '', 200, 16, 2, 2, 1, 'GRASS/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}

class Starly extends Pokemon {
  constructor() {
    super('starly', [TYPE.NORMAL, TYPE.FLYING], RARITY.COMMON, 396, 'staravia', 60, 5, 2, 2, 1, 'FLYING/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Staravia extends Pokemon {
  constructor() {
    super('staravia', [TYPE.NORMAL, TYPE.FLYING], RARITY.COMMON, 397, 'staraptor', 110, 9, 2, 2, 1, 'FLYING/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Staraptor extends Pokemon {
  constructor() {
    super('staraptor', [TYPE.NORMAL, TYPE.FLYING], RARITY.COMMON, 398, '', 200, 16, 2, 2, 1, 'FLYING/melee', ATTACK_TYPE.PHYSICAL,3);
  }
}
class Magikarp extends Pokemon {
  constructor() {
    super('magikarp', [TYPE.WATER], RARITY.NEUTRAL, 129, '', 30, 1, 1, 1, 1, 'WATER/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Gyarados extends Pokemon {
  constructor() {
    super('gyarados', [TYPE.WATER], RARITY.NEUTRAL, 130, '', 200, 16, 5, 1, 1, 'WATER/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Rattata extends Pokemon {
  constructor() {
    super('rattata', [TYPE.NORMAL], RARITY.NEUTRAL, 19, '', 30, 5, 1, 1, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Raticate extends Pokemon {
  constructor() {
    super('raticate', [TYPE.NORMAL], RARITY.NEUTRAL, 20, '', 60, 7, 1, 1, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Spearow extends Pokemon {
  constructor() {
    super('spearow', [TYPE.FLYING, TYPE.NORMAL], RARITY.NEUTRAL, 21, '', 30, 5, 1, 1, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Fearow extends Pokemon {
  constructor() {
    super('fearow', [TYPE.FLYING, TYPE.NORMAL], RARITY.NEUTRAL, 22, '', 60, 7, 1, 1, 1, 'NORMAL/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Lugia extends Pokemon {
  constructor() {
    super('lugia', [TYPE.WATER, TYPE.NORMAL], RARITY.NEUTRAL, 249, '', 250, 16, 10, 2, 4, 'FLYING/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Giratina extends Pokemon {
  constructor() {
    super('giratina', [TYPE.DARK, TYPE.AMORPH], RARITY.NEUTRAL, 487, '', 250, 16, 10, 2, 2, 'GHOST/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Zapdos extends Pokemon {
  constructor() {
    super('zapdos', [TYPE.ELECTRIC, TYPE.FLYING], RARITY.NEUTRAL, 145, '', 250, 16, 10, 2, 2, 'ELECTRIC/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Moltres extends Pokemon {
  constructor() {
    super('moltres', [TYPE.FIRE,TYPE.FLYING], RARITY.NEUTRAL, 146, '', 250, 16, 10, 2, 2, 'FIRE/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Articuno extends Pokemon {
  constructor() {
    super('articuno', [TYPE.WATER, TYPE.FLYING], RARITY.NEUTRAL, 144, '', 250, 16, 10, 2, 2, 'FLYING/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Dialga extends Pokemon {
  constructor() {
    super('dialga', [TYPE.METAL, TYPE.DRAGON], RARITY.NEUTRAL, 483, '', 250, 16, 10, 2, 2, 'FIGHTING/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Palkia extends Pokemon {
  constructor() {
    super('palkia', [TYPE.DRAGON, TYPE.WATER], RARITY.NEUTRAL, 484, '', 250, 16, 10, 2, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Suicune extends Pokemon {
  constructor() {
    super('suicune', [TYPE.WATER, TYPE.AQUATIC], RARITY.NEUTRAL, 245, '', 250, 16, 10, 2, 1, 'WATER/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Raikou extends Pokemon {
  constructor() {
    super('raikou', [TYPE.ELECTRIC], RARITY.NEUTRAL, 243, '', 250, 16, 10, 2, 1, 'ELETRIC/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Entei extends Pokemon {
  constructor() {
    super('entei', [TYPE.FIRE], RARITY.NEUTRAL, 244, '', 250, 16, 10, 2, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Regice extends Pokemon {
  constructor() {
    super('regice', [TYPE.WATER], RARITY.NEUTRAL, 378, '', 250, 16, 10, 2, 1, 'ICE/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Regirock extends Pokemon {
  constructor() {
    super('regirock', [TYPE.MINERAL], RARITY.NEUTRAL, 377, '', 250, 16, 10, 2, 1, 'ROCK/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Registeel extends Pokemon {
  constructor() {
    super('registeel', [TYPE.METAL], RARITY.NEUTRAL, 379, '', 250, 16, 10, 2, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Regigigas extends Pokemon {
  constructor() {
    super('regigigas', [TYPE.NORMAL], RARITY.NEUTRAL, 486, '', 250, 16, 10, 2, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Kyogre extends Pokemon {
  constructor() {
    super('kyogre', [TYPE.WATER, TYPE.AQUATIC], RARITY.NEUTRAL, 382, '', 250, 16, 10, 2, 4, 'WATER/range', ATTACK_TYPE.SPECIAL,1);
  }
}

class Groudon extends Pokemon {
  constructor() {
    super('groudon', [TYPE.GROUND, TYPE.FIRE], RARITY.NEUTRAL, 383, '', 250, 16, 10, 2, 1, 'FIRE/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Rayquaza extends Pokemon {
  constructor() {
    super('rayquaza', [TYPE.DRAGON,TYPE.FLYING], RARITY.NEUTRAL, 384, '', 250, 16, 10, 2, 1, 'DRAGON/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Eevee extends Pokemon{
  constructor(){
    super('eevee',[TYPE.NORMAL, TYPE.FIELD],RARITY.UNCOMMON,133,'',130,5,2,2,1,'NORMAL/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Vaporeon extends Pokemon{
  constructor(){
    super('vaporeon',[TYPE.WATER, TYPE.AQUATIC, TYPE.FIELD],RARITY.UNCOMMON,134,'',130,9,1,1,2,'WATER/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Jolteon extends Pokemon{
  constructor(){
    super('jolteon',[TYPE.ELECTRIC, TYPE.FIELD],RARITY.UNCOMMON,135,'',130,9,1,1,2,'ELECTRIC/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Flareon extends Pokemon{
  constructor(){
    super('flareon',[TYPE.FIRE, TYPE.FIELD],RARITY.UNCOMMON,136,'',130,9,3,2,1,'FIRE/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Espeon extends Pokemon{
  constructor(){
    super('espeon',[TYPE.PSYCHIC, TYPE.FIELD],RARITY.UNCOMMON,196,'',130,9,1,1,2,'PSYCHIC/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Umbreon extends Pokemon{
  constructor(){
    super('umbreon',[TYPE.DARK, TYPE.FIELD],RARITY.UNCOMMON,197,'',130,9,3,2,1,'DRAGON/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Leafon extends Pokemon{
  constructor(){
    super('leafon',[TYPE.GRASS, TYPE.FLORA, TYPE.FIELD],RARITY.UNCOMMON,470,'',130,9,3,2,1,'GRASS/melee', ATTACK_TYPE.PHYSICAL,2);
  }
}

class Sylveon extends Pokemon{
  constructor(){
    super('sylveon',[TYPE.FAIRY, TYPE.FIELD],RARITY.UNCOMMON,700,'',130,9,1,1,2,'FAIRY/range', ATTACK_TYPE.SPECIAL,2);
  }
}

class Sandshrew extends Pokemon{
  constructor(){
    super('sandshrew',[TYPE.GROUND, TYPE.FIELD],RARITY.NEUTRAL,27,'',70,5,1,1,1,'NORMAL/melee', ATTACK_TYPE.PHYSICAL,1);
  }
}

class Darkrai extends Pokemon{
  constructor(){
    super('darkrai',[TYPE.DARK, TYPE.AMORPH],RARITY.NEUTRAL,491,'',200,10,3,3,3,'GHOST/range', ATTACK_TYPE.SPECIAL,1);
  }
}

schema.defineTypes(Pokemon, {
  id: 'string',
  name: 'string',
  types: ['string'],
  rarity: 'string',
  index: 'uint16',
  evolution: 'string',
  positionX: 'uint8',
  positionY: 'uint8',
  cost: 'uint8',
  attackSprite: 'string',
  atkSpeed: 'uint16',
  def: 'uint8',
  speDef: 'uint8',
  attackType: 'string',
  atk: 'uint8',
  hp: 'uint8',
  range: 'uint8',
  stars: 'uint8',
  items: Items
});

module.exports = {
  Pokemon,
  Ditto,
  Bulbasaur,
  Ivysaur,
  Venusaur,
  Charmander,
  Charmeleon,
  Charizard,
  Squirtle,
  Wartortle,
  Blastoise,
  Geodude,
  Graveler,
  Golem,
  Azurill,
  Marill,
  Azumarill,
  Zubat,
  Golbat,
  Crobat,
  Mareep,
  Flaffy,
  Ampharos,
  Cleffa,
  Clefairy,
  Clefable,
  Igglybuff,
  Wigglytuff,
  Jigglypuff,
  Caterpie,
  Metapod,
  Butterfree,
  Weedle,
  Kakuna,
  Beedrill,
  Pidgey,
  Pidgeotto,
  Pidgeot,
  Hoppip,
  Skiploom,
  Jumpluff,
  Seedot,
  Nuzleaf,
  Shiftry,
  Starly,
  Staravia,
  Staraptor,
  Chikorita,
  Bayleef,
  Meganium,
  Cyndaquil,
  Quilava,
  Typhlosion,
  Totodile,
  Croconaw,
  Feraligatr,
  Treecko,
  Grovyle,
  Sceptile,
  Torchic,
  Combusken,
  Blaziken,
  Mudkip,
  Marshtomp,
  Swampert,
  Turtwig,
  Grotle,
  Torterra,
  Chimchar,
  Monferno,
  Infernape,
  Piplup,
  Prinplup,
  Empoleon,
  NidoranF,
  Nidorina,
  Nidoqueen,
  NidoranM,
  Nidorino,
  Nidoking,
  Pichu,
  Pikachu,
  Raichu,
  Machop,
  Machoke,
  Machamp,
  Horsea,
  Seadra,
  Kingdra,
  Trapinch,
  Vibrava,
  Flygon,
  Spheal,
  Sealeo,
  Walrein,
  Aron,
  Lairon,
  Aggron,
  Magnemite,
  Magneton,
  Magnezone,
  Rhyhorn,
  Rhydon,
  Rhyperior,
  Togepi,
  Togetic,
  Togekiss,
  Duskull,
  Dusclops,
  Dusknoir,
  Lotad,
  Lombre,
  Ludicolo,
  Shinx,
  Luxio,
  Luxray,
  Poliwag,
  Poliwhirl,
  Politoed,
  Abra,
  Kadabra,
  Alakazam,
  Gastly,
  Haunter,
  Gengar,
  Dratini,
  Dragonair,
  Dragonite,
  Larvitar,
  Pupitar,
  Tyranitar,
  Slakoth,
  Vigoroth,
  Slaking,
  Ralts,
  Kirlia,
  Gardevoir,
  Bagon,
  Shelgon,
  Salamence,
  Beldum,
  Metang,
  Metagross,
  Gible,
  Gabite,
  Garchomp,
  Elekid,
  Electabuzz,
  Electivire,
  Magby,
  Magmar,
  Magmortar,
  Munchlax,
  Snorlax,
  Growlithe,
  Arcanine,
  Onix,
  Steelix,
  MegaSteelix,
  Scyther,
  Scizor,
  MegaScizor,
  Riolu,
  Lucario,
  MegaLucario,
  Magikarp,
  Rattata,
  Raticate,
  Spearow,
  Fearow,
  Gyarados,
  Lugia,
  Giratina,
  Zapdos,
  Moltres,
  Articuno,
  Dialga,
  Palkia,
  Suicune,
  Raikou,
  Entei,
  Regice,
  Regirock,
  Registeel,
  Kyogre,
  Groudon,
  Rayquaza,
  Regigigas,
  Eevee,
  Vaporeon,
  Jolteon,
  Flareon,
  Espeon,
  Umbreon,
  Leafon,
  Sylveon,
  Meditite,
  Medicham,
  MegaMedicham,
  Numel,
  Camerupt,
  MegaCamerupt,
  Sandshrew,
  Darkrai
};
