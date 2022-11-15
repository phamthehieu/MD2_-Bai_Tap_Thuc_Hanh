
export class Cadres {
    private _name: string;
    private _age: number;
    private _gender: string;
    private _address: string;

    constructor(name: string, age: number, gender: string, address: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._address = address;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getAge(): number {
        return this._age;
    }

    setAge(value: number) {
        this._age = value;
    }

    getGender(): string {
        return this._gender;
    }

    setGender(value: string) {
        this._gender = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }
}
