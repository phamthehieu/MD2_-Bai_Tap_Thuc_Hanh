import {Cadres} from "./Cardres";

export class Engineer extends Cadres{
    private _majors: string;

    constructor(name: string, age: number, gender: string, address: string, Majors: string) {
        super(name, age, gender, address);
        this._majors = Majors;
    }

    getMajors(): string {
        return this._majors;
    }

    setMajors(value: string) {
        this._majors = value;
    }
}