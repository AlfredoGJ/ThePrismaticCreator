type Option = {
  id: number | string;
  name: string;
};

type TabData = {
  title: string;
  tabUI: React.ReactNode;
  panelUI: React.ReactNode;
};

type ImageData = {
  data: string;
  name: string;
  type: string;
};

interface ICostQuantity {
  white: number;
  blue: number;
  black: number;
  red: number;
  green: number;
  colorless: number;
}

export type BasicLandType =
  | "Swamp"
  | "Forest"
  | "Mountain"
  | "Plains"
  | "Island";

export enum NoColorIdentityEnum {
  Colorless = "Colorless",
}

export enum MonoColorIdentityEnum {
  Green = "Green",
  Red = "Red",
  White = "White",
  Black = "Black",
  Blue = "Blue",
}

export enum TwoColorIdentityEnum {
  Azorius = "Azorius",
  Boros = "Boros",
  Dimir = "Dimir",
  Golgari = "Golgari",
  Gruul = "Gruul",
  Izzet = "Izzet",
  Orzhov = "Orzhov",
  Rakdos = "Rakdos",
  Selesnya = "Selesnya",
  Simic = "Simic",
  Multicolor = "Multicolor",
}

export type ColorIdentityType = typeof NoColorIdentityEnum &
  typeof MonoColorIdentityEnum &
  typeof TwoColorIdentityEnum;

export type ColorIdentityEnum = ColorIdentityType[
  | "Azorius"
  | "Boros"
  | "Dimir"
  | "Golgari"
  | "Gruul"
  | "Izzet"
  | "Orzhov"
  | "Rakdos"
  | "Selesnya"
  | "Simic"
  | "Multicolor"
  | "Green"
  | "Red"
  | "White"
  | "Black"
  | "Blue"
  | "Colorless"];

type CardType =
  | "Artifact"
  | "Conspiracy"
  | "Creature"
  | "Enchantment"
  | "Instant"
  | "Land"
  | "Phenomenon"
  | "Plane"
  | "Planeswalker"
  | "Scheme"
  | "Sorcery"
  | "Tribal"
  | "Vanguard";

type CardSuperType =
  | "None"
  | "Basic"
  | "Legendary"
  | "Ongoing"
  | "Snow"
  | "World";

type ArtifactSubTypes =
  | "Attraction"
  | "Blood"
  | "Clue"
  | "Contraption"
  | "Equipment"
  | "Food"
  | "Fortification"
  | "Gold"
  | "Powerstone"
  | "Treasure"
  | "Vehicle";

type EnchantmentSubTypes =
  | "Aura"
  | "Background"
  | "Cartouche"
  | "Case"
  | "Class"
  | "Curse"
  | "Role"
  | "Rune"
  | "Saga"
  | "Shard"
  | "Shrine";

export type CardRarity = "Mythic" | "Common" | "Uncommon" | "Rare";
type Colors = "B" | "U" | "G" | "R" | "W" | "C";
type GenericMana = `${number}` | "X" | "Y" | "Z";
type HybridMana =
  | "W/U"
  | "W/B"
  | "U/B"
  | "U/R"
  | "B/R"
  | "B/G"
  | "R/G"
  | "R/W"
  | "G/W"
  | "G/B";
type ManaCostSymbols = Colors | HybridMana | GenericMana;
type TextGameSymbols =
  | "R"
  | "U"
  | "W"
  | "B"
  | "G"
  | "S"
  | "T"
  | "PyrexianMana"
  | "C"
  | `${number}`;

type CardData = {
  imageSource: string;
  title: string;
  artist: string;
  disclaimer: string;
  text: string;
  flavor?: string;
  superType: CardSuperType;
  types: CardType[];
  subtypes: string;
  collection: string;
  rarity: CardRarity;
  colorIdentity: Colors[];
  manaCost: ManaCostSymbols[];
  creatureData?: CreatureData;
};

type CreatureData = {
  power: number;
  toughness: number;
};
export type {
  ImageData,
  CardType,
  CardSuperType,
  TabData,
  Option,
  TextGameSymbols,
  CardData,
  CreatureData,
  ManaCostSymbols,
  ICostQuantity,
  Colors,
};
