import {LibrarianInterface} from "./LibrarianInterface";
import {Librarian} from "../librarian/librarian";
import {Book} from "../librarian/book";
import {Newspaper} from "../librarian/newspaper";
import {Magazine} from "../librarian/magazine";

export class LibrarianManager implements LibrarianInterface<Librarian> {
    public listLibrarian: Librarian[] = [];
    list: Librarian[] = [];
    listBook: Book[] = [];
    listNewspaper: Newspaper[] = [];
    listMagazine: Magazine[] = [];

    add(document: any) {
        this.listLibrarian.push(document);
        this.listBook.push(document);
        this.listNewspaper.push(document);
        this.listMagazine.push(document);
    }

    finAll(): Librarian[] {
        return this.listLibrarian;
    }

    remove(id: number) {
        for (let i = 0; i < this.listLibrarian.length; i++) {
            if (this.listLibrarian[i].getId() === id) {
                this.listLibrarian.splice(i, 1)
            }
        }
        return this.listLibrarian;

    }

    searchDocumentByType(Type: any) {
        this.list = [];
        for (let i = 0; i < this.listLibrarian.length; i++) {
            if (this.listLibrarian[i] instanceof Type) {
                this.list.push(this.listLibrarian[i])
            }
        }
        return this.list;
    }

    check(index: number): number {
        let flag;
        flag = 0
        for (let i = 0; i < this.listLibrarian.length; i++) {
            if (this.listLibrarian[i].getId() === index) {
                flag++;
            }
        }
        if (flag >= 1) return 1
        else return -1;
    }

    searchDocumentById(id: number): number {
        for (let i = 0; i < this.listLibrarian.length; i++) {
            if (this.listLibrarian[i].getId() === id) {
                return i;
            }
        }
        return -1;
    }
}