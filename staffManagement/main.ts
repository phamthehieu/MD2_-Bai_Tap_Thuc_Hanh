
import {CadresManagement} from "./staffManagement/cadresManagement";
import {Engineer} from "./Cadres/Engineer";
import {Worker} from "./Cadres/Worker";
import {Staff} from "./Cadres/Staff";

let readlineSync = require('readline-sync');
let cadresManagement = new CadresManagement();

function main() {
    let menu = `---------Menu chính-----------
    1.Thêm nhan vien
    2.Hiển thị danh sach
    3.Tim nhan vien
    0.Thoát chương trình`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                add();
                break;
            case 2:
                display();
                break;
            case 3:
                search1();
                break;
            
        }
    } while (choice !== 0);
}

main();

function add() {
    let menu = `---------Chọn chức vụ-----------
    1.Worker
    2.Engineer
    3.Staff
    0.Thoát chương trình`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                worker();
                break;
            case 2:
                engineer();
                break;
            case 3:
                staff();
                break;

        }
    } while (choice !== 0);
}

add();

function worker() {
    console.log('---------Hiển thị thêm cong nhan mới-----------');
    let name = readlineSync.question('Enter name :  ');
    let age = +readlineSync.question('Enter age :  ');
    let gender = readlineSync.question('Enter gender :  ');
    let address = readlineSync.question('Enter address :  ');
    let rank = +readlineSync.question('Enter Rank : ')
    let worker = new Worker(name, age, gender, address, rank)
    cadresManagement.add(worker);
}

function engineer() {
    console.log('---------Hiển thị thêm ky su mới-----------');
    let name = readlineSync.question('Enter name :  ');
    let age = +readlineSync.question('Enter age :  ');
    let gender = readlineSync.question('Enter gender :  ');
    let address = readlineSync.question('Enter address :  ');
    let majors = readlineSync.question('Enter majors : ')
    let engineer = new Engineer(name, age, gender, address, majors)
    cadresManagement.add(engineer);
}

function staff() {
    console.log('---------Hiển thị thêm nhan vien mới-----------');
    let name = readlineSync.question('Enter name :  ');
    let age = +readlineSync.question('Enter age :  ');
    let gender = readlineSync.question('Enter gender :  ');
    let address = readlineSync.question('Enter address :  ');
    let majors = readlineSync.question('Enter majors : ')
    let staff = new Staff(name, age, gender, address, majors)
    cadresManagement.add(staff);
}

function display() {
    console.log(`--------------Hiem thi danh sach---------------`)
    console.log(cadresManagement.findAll());
}

function search1() {

    let addSearch = readlineSync.question(' Nhap ten can tim: ')
    // cadresManagement.search(addSearch);
    console.log(cadresManagement.search(addSearch))
}
