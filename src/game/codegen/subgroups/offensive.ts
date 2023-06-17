import { toNormalized } from "../name-mappers";

// Any skill that does the following is an offensive skill:
// - deals damage or allows anyone to deal more damage
// - Applying a condition
// - gaining energy
// - draining the target's energy
// - interrupting
//
// NOTE: A skill can be categorized as offensive and still be categorized as
// supportive.

export const ranger_offensive_skills = [
  "Apply Poison",
  "Archer's Signet",
  "Arcing Shot",
  "Barbed Arrows",
  "Barbed Trap",
  "Barrage",
  "Bestial Fury",
  "Bestial Mauling",
  "Bestial Pounce",
  "Body Shot",
  "Brambles",
  "Broad Head Arrow",
  "Brutal Strike",
  "Burning Arrow",
  "Call of Haste",
  "Called Shot",
  "Choking Gas",
  "Concussion Shot",
  "Crippling Shot",
  "Crossfire",
  "Debilitating Shot",
  "Determined Shot",
  "Disrupting Accuracy",
  "Disrupting Lunge",
  "Disrupting Shot",
  "Distracting Shot",
  "Dodge",
  "Dual Shot",
  "Dust Trap",
  "Edge of Extinction",
  "Enraged Lunge",
  "Expert Focus",
  "Expert's Dexterity",
  "Famine",
  "Feral Aggression",
  "Feral Lunge",
  "Ferocious Strike",
  "Flame Trap",
  "Focused Shot",
  "Forked Arrow",
  "Glass Arrows",
  "Heal as One",
  "Heket's Rampage",
  "Hunter's Shot",
  "Ignite Arrows",
  "Incendiary Arrows",
  "Keen Arrow",
  "Kindle Arrows",
  "Infuriating Heat",
  "Lacerate",
  "Lightning Reflexes",
  "Magebane Shot",
  "Maiming Strike",
  "Marauder's Shot",
  "Marksman's Wager",
  "Melandru's Arrows",
  "Melandru's Assault",
  "Melandru's Shot",
  "Needling Shot",
  "Never Rampage Alone",
  "Oath Shot",
  "Otyugh's Cry",
  "Penetrating Attack",
  "Piercing Trap",
  "Pin Down",
  "Point Blank Shot",
  "Poison Arrow",
  "Poison Tip Signet",
  "Poisonous Bite",
  "Pounce",
  "Power Shot",
  "Practiced Stance",
  "Precision Shot",
  "Predator's Pounce",
  "Predatory Bond",
  "Predatory Season",
  "Prepared Shot",
  "Punishing Shot",
  "Quick Shot",
  "Rampage as One",
  "Rapid Fire",
  "Read the Wind",
  "Savage Pounce",
  "Savage Shot",
  "Scavenger Strike",
  "Scavenger's Focus",
  "Screaming Shot",
  "Seeking Arrows",
  "Sloth Hunter's Shot",
  "Smoke Trap",
  "Snare",
  "Spike Trap",
  "Serpent's Quickness",
  "Splinter Shot",
  "Strike as One",
  "Sundering Attack",
  "Tiger's Fury",
  "Triple Shot",
  "Tripwire",
  "Viper's Nest",
  "Volley",
  "Zojun's Shot",
].map(toNormalized);

export const all_offensive_skills = new Set([].concat(ranger_offensive_skills));