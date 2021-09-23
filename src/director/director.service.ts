import { Injectable } from '@nestjs/common';
import { DirectorInput } from './director.input';
import { Director } from './director.model';

export const defaultDirectors = [
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

    private directors: Director[];

    constructor () {
        this.directors = defaultDirectors;
    }

    getNumberOfDirectors() {
        return this.directors.length;
    }

    getDirectors() {
        return this.directors;
    }

    getDirectorsByName(name: string) {
        return this.directors.filter(director => director.name === name);
    }

    addDirector(director: DirectorInput) {
        this.directors.push(director);
        return director;
    }
}
