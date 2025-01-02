import { Curriculum } from "@/types";

export class Workout {
  id: string;
  dual: number;
  date: Date;
  type: Curriculum;
  title1?: string;
  title2?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  description5?: string;
  description6?: string;
  game_title?: string;
  game_rule?: string;
  game_description1?: string;
  game_description2?: string;

  constructor(
    id: string,
    dual: number,
    date: Date,
    type: Curriculum,
    title1?: string,
    title2?: string,
    description1?: string,
    description2?: string,
    description3?: string,
    description4?: string,
    description5?: string,
    description6?: string,
    game_title?: string,
    game_rule?: string,
    game_description1?: string,
    game_description2?: string
  ) {
    this.id = id;
    this.dual = dual;
    this.date = date;
    this.type = type;
    this.title1 = title1;
    this.title2 = title2;
    this.description1 = description1;
    this.description2 = description2;
    this.description3 = description3;
    this.description4 = description4;
    this.description5 = description5;
    this.description6 = description6;
    this.game_title = game_title;
    this.game_rule = game_rule;
    this.game_description1 = game_description1;
    this.game_description2 = game_description2;
  }
}
