import {Town} from "./town";
import {Persons} from "./persons";
import {Family} from "./family";

let readlineSync = require('readline-sync');
let town = new Town();


function addPerson(numberOfPerson: number, houseNumber: number) {
    let menu = `---------Menu chính-----------
    1.Thêm người trong gia đình 
    0.Thoát chương trình`
    let t: Persons[] = []
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                console.log('---------Hiển thị form thêm mới-----------');
                let name = readlineSync.question('Enter name :  ');
                let age = +readlineSync.question('Enter age :  ');
                let job = readlineSync.question('Enter job :  ');
                let id = readlineSync.question('Enter id :  ');
                let person = new Persons(name, age, job, id);
                t.push(person)
                numberOfPerson++;
                break;

        }
    } while (choice !== 0);
    console.log(t)
    let family = new Family(numberOfPerson, houseNumber, t);
    town.addFamily1(family)
}

function addFamily() {

    console.log('---------Hiển thị form thêm mới-----------');
    let numberOfPerson = 0;
    let houseNumber = readlineSync.question('Enter houseNumber :  ');
    addPerson(numberOfPerson, houseNumber)
}

function display() {
    console.log('------Hiển thị hộ gia đình----------')
    console.log(town.display())

}

function main() {
    let menu = `---------Menu chính-----------
    1.Thêm hộ gia đình
    2.Hiển thị
    0.Thoát chương trình`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                addFamily();
                break;
            case 2:
                display();
                break;

        }
    } while (choice !== 0);
}

main();