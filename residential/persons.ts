export class Persons {
    private name: string;
    private age: number;
    private job: string;
    private id: string;

    constructor(name: string, age: number, job: string, id: string) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getAge(): number {
        return this.age;
    }

    setAge(value: number) {
        this.age = value;
    }

    getJob(): string {
        return this.job;
    }

    setJob(value: string) {
        this.job = value;
    }

    getId(): string {
        return this.id;
    }

    setId(value: string) {
        this.id = value;
    }

}

