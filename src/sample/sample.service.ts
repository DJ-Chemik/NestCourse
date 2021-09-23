import { Injectable } from '@nestjs/common';

export enum aaaaa {
    IRON_MAN = "Iron Man",
    THOR = "Thor",
    HULK = "Hulk",
    CAPTAIN_AMERICA = "Captain America",
    LOKI = "Loki",
    ANT_MAN = "Ant Man",
    ANT_MAN_1 = "Ant-Man",
    DOCTOR_STRANGE = "Doctor Strange",
    SPIDER_MAN = "Spider Man",
    SPIDER_MAN_1 = "Spider-Man",
    BLACK_PANTHER = "Black Panther",
    CAPTAIN_MARVEL = "Captain Marvel",
    BLACK_WIDOW = "Black Widow",
    SCARLET_WITCH = "Scarlet Witch",
    HAWKEYE = "Hawkeye",
    THANOS = "Thanos",
    WINTER_SOLDIER = "Winter Soldier",
    VISION = "Vision",
    WAR_MACHINE = "War Machine",
    ODYN = "Odyn",
    RED_SKULL = "Red Skull",
    WOLVERINE = "Wolverine",
    STAR_LORD = "Star Lord",
    STAR_LORD_1 = "Star-Lord",
    VENOM = "Venom",
    GAMORA = "Gamora",
    ROCKET = "Rocket",
    GROOT = "Groot",
    DRAX = "Drax",
    DAREDEVIL = "Daredevil",
    FALCON = "Falcon",
    NEBULA = "Nebula",
    QUICKSILVER = "Quicksilver",
    NICK_FURY = "Nick Fury",
    YONDU_UDONTA = "Yondu Udonta",
    PEPPER_POTTS = "Pepper Potts",
}

@Injectable()
export class SampleService {
  constructor() {}

    sayHello(): string {
        return 'Hello World!';
    }

    sayHelloExtended(hero?: string): string {
        if (hero) {
            return `Hello ${hero}!`;
        }
        return 'Hello World!';
    }

    sayGoodbye(): string {
        return 'Goodbye!';
    }

    getHeroParameters(hero?: aaaaa) {
        if (!hero) {
            return { name: "No hero selected" };
        }
        if (!Object.values(aaaaa).includes(hero)) {
            return { name: "Unknown hero" };
        }
        return {
            name: hero,
            points: (Object.values(aaaaa).indexOf(hero) + 1) * 10,
        };
    }

}
