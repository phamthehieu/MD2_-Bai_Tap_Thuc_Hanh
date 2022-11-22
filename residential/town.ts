
import {Family} from "./family";
export class Town {
    listFamily: Family[] = [];

    addFamily1(t: Family): void {
        this.listFamily.push(t)
    }

    display() {
        for (let i of this.listFamily) {
            return i
        }
    }
}