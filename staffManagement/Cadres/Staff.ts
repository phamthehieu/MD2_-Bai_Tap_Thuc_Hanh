import {Cadres} from "./Cardres";

export class Staff extends Cadres{
    private _work: string;

    constructor(name: string, age: number, gender: string, address: string, work: string) {
        super(name, age, gender, address);
        this._work = work;
    }

    getWork(): string {
        return this._work;
    }

    setWork(value: string) {
        this._work = value;
    }
}