import { findHeroById } from "./services/hero.service";

const hero = findHeroById(5);

console.log(hero)
console.log(hero?.name ??  'Hero no found!')