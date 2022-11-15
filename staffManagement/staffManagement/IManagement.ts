
export interface Interface<T> {
    add(t : T): void;

    findAll(): T[];

    search(name: string): any;

    // searchByName(name: string): any;
}