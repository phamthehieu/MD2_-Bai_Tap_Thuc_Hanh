export interface LibrarianInterface<T> {
    add(t: T): void;

    finAll(): T[];

    remove(id: number): void;

    searchDocumentByType(Type: any);

    check(id: number): number;

}