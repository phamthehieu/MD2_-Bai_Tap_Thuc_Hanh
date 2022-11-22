 import {Persons} from "./persons";
export class Family {
    private numberOfPerson !: number;
    private houseNumber !: number;
    private listPerson: Persons [];

    constructor(numberOfPerson: number, houseNumber: number, listPerson: Persons []) {
        this.numberOfPerson = numberOfPerson;
        this.houseNumber = houseNumber;
        this.listPerson = listPerson;
    }

    getNumberOfPerson(): number {
        return this.numberOfPerson;
    }

    setNumberOfPerson(value: number) {
        this.numberOfPerson = value;
    }

    getHouseNumber(): number {
        return this.houseNumber;
    }

    setHouseNumber(value: number) {
        this.houseNumber = value;
    }


    getListPerson(): Persons[] {
        return this.listPerson;
    }

    setListPerson(value: Persons[]) {
        this.listPerson = value;
    }
}
