import { Injectable } from '@nestjs/common';

export const directors = [
    {
        name: "Quentin",
        surname: "Tarantino",
        isAlive: true,
        birthDate: new Date(),
    },
    {
        name: "Quentin",
        surname: "Marantino",
        isAlive: false,
        birthDate: new Date(),
    },
    {
        name: "Tarantin",
        surname: "Quentino",
        isAlive: true,
        birthDate: new Date(),
    },
    {
        name: "Gandalf",
        surname: "Tarantino",
        isAlive: false,
        birthDate: new Date(),
    },
    {
        name: "Gandalf",
        surname: "Biały",
        isAlive: true,
        birthDate: new Date(),
    },
    {
        name: "Peter",
        surname: "Farrelly",
        isAlive: true,
        birthDate: new Date(),
    },
];

@Injectable()
export class DirectorService {

    getNumberOfDirectors() {
        return directors.length;
    }

    getDirectors() {
        return directors;
    }

    getDirectorsByName(name: string) {
        return directors.filter(director => director.name === name);
    }
}
