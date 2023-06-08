import type { Skillset } from "../../stores/builds";
import type { SkillOrigin } from "../codegen/subgroups/campaigns";
import type { Outpost } from "../outposts";
import type { Profession } from "../professions";
import { Rng } from "../rng";
import skills from "../skills";

export interface BuildGenOptions {
  is_primary_profession: boolean;
  available_skill_origins: SkillOrigin[];
}

export function generateSkillset(
  character_name: string,
  outpost: Outpost,
  profession: Profession,
  options: Partial<BuildGenOptions> = {}
): Skillset {
  if (!character_name || !outpost || !profession) {
    return new Set();
  }

  const available_skill_origins = new Set(
    options.available_skill_origins || []
  );

  if (
    (profession === "dervish" || profession === "paragon") &&
    !available_skill_origins.has("Nightfall") &&
    !available_skill_origins.has("GWEN")
  ) {
    return new Set();
  }

  if (
    (profession === "assassin" || profession === "ritualist") &&
    !available_skill_origins.has("Faction") &&
    !available_skill_origins.has("Nightfall") &&
    !available_skill_origins.has("GWEN")
  ) {
    return new Set();
  }

  const rng = new Rng(`${character_name}-${outpost.link}-${profession}`);
  const available_skills = skills
    .get(profession)
    .filter((skill) => available_skill_origins.has(skill.options.origin));

  const subsets = {
    regulars: available_skills.filter((s) => !s.options.is_elite),
    selfheals: available_skills.filter(
      (s) => !s.options.is_elite && s.options.is_self_heal
    ),
    elites: available_skills.filter((s) => s.options.is_elite),
  };

  const SKILLSET_NORMAL_SIZE = Math.min(20, subsets.regulars.length);
  let skillset: Skillset = new Set();

  // 1.
  // start by adding one guaranted self-heal
  let shortcircuit = 100;
  if (subsets.selfheals.length > 0) {
    while (skillset.size < 1 && shortcircuit--) {
      const index = rng.nextRange(subsets.selfheals.length);

      skillset.add(subsets.selfheals.at(index));
    }
  }

  // 2.
  // add regular skills until it reaches SKILLSET_NORMAL_SIZE
  shortcircuit = 100;
  while (skillset.size < SKILLSET_NORMAL_SIZE && shortcircuit--) {
    const skill_index = rng.nextRange(subsets.regulars.length);
    const skill = subsets.regulars.at(skill_index);

    if (skillset.has(skill)) {
      continue;
    }

    skillset.add(skill);
  }

  // 3.
  // if primary profession, add a random amount of elites to the skillset
  if (options.is_primary_profession && subsets.elites.length > 0) {
    const elites_count = rng.nextRange(Math.min(subsets.elites.length, 6), 3);

    shortcircuit = 100;
    while (
      skillset.size < SKILLSET_NORMAL_SIZE + elites_count &&
      shortcircuit--
    ) {
      const skill_index = rng.nextRange(subsets.elites.length);
      const skill = subsets.elites.at(skill_index);

      if (skillset.has(skill)) {
        continue;
      }

      skillset.add(skill);
    }
  }

  return skillset;
}
