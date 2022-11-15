
import {LibrarianManager} from "./libraryManager/Librarian-manager";
import {Book} from "./librarian/book";
import {Newspaper} from "./librarian/newspaper";
import {Magazine} from "./librarian/magazine";

let readlineSync = require('readline-sync');
let librarianManager = new LibrarianManager();

 function add() {
     let menu = (`--------Menu Chinh--------
     1.Sach
     2.Tap Chi
     3. Bao
     0.Thoat chuong trinh`)
     let choice = -1;
     do {
         console.log(menu)
         choice = +readlineSync.question('Enter Choice : ');
         switch (choice) {
             case 1:
                 addBook();
                 break;
             case 2:
                 addMagazine();
                 break;
             case 3:
                 addNewspaper();
                 break;

         }
     } while (choice !== 0);
 }


 function addBook() {
     console.log('---------Them Sach Moi---------')
     let id= +readlineSync.question('Enter id :  ');
     let producer= readlineSync.question('Enter producer :  ');
     let issueNumber = +readlineSync.question('Enter issueNumber :  ');
     let author = readlineSync.question('Enter author :  ');
     let pageNumber = +readlineSync.question('Enter tier :  ');
     let book = new Book(id, producer, issueNumber, author, pageNumber);
     if (librarianManager.check(book.getId() ) === -1) librarianManager.add(book);
     else {
         console.log('---------Id đã tồn tại, vui lòng nhập lại-----------')
         addBook()
     }
 }

function addMagazine() {
    console.log('---------Them Newspaper Moi---------')
    let id = +readlineSync.question('Enter id :  ');
    let producer= readlineSync.question('Enter producer :  ');
    let issueNumber = +readlineSync.question('Enter issueNumber :  ');
    let releaseDate = +readlineSync.question('Enter releaseDate :  ');
    let magazine = new Magazine(id, producer, issueNumber, releaseDate);
    if (librarianManager.check(magazine.getId() ) === -1) librarianManager.add(magazine);
    else {
        console.log('---------Id đã tồn tại, vui lòng nhập lại-----------')
        addNewspaper()
    }
}
function addNewspaper() {
    console.log('---------Them Magazine Moi---------')
    let id = +readlineSync.question('Enter id :  ');
    let producer= readlineSync.question('Enter producer :  ');
    let issueNumber = +readlineSync.question('Enter issueNumber :  ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber :  ');
    let releaseMonth = +readlineSync.question('Enter releaseMonth :  ');
    let newspaper = new Newspaper(id, producer, issueNumber, releaseNumber, releaseMonth);
    if (librarianManager.check(newspaper.getId() ) === -1) librarianManager.add(newspaper);
    else {
        console.log('---------Id đã tồn tại, vui lòng nhập lại-----------')
        addNewspaper()
    }
}

function deleteLibrarian() {
     let id = +readlineSync.question(' Enter id need to find: ')
    console.log(librarianManager.remove(id));
}

function display() {
     console.log('------------Danh sach thu vien------------')
    console.log(librarianManager.finAll())
}

function displayBook() {
    console.log(librarianManager.searchDocumentByType(Book))
}

function displayMagazine() {
     console.log(librarianManager.searchDocumentByType(Magazine));
}

function displayNewspaper() {
    console.log(librarianManager.searchDocumentByType(Newspaper))
}

function main() {
     let menu = (`----------------Menu------------
     1.Thêm mới 
     2. Xóa 
     3. Hiển thị tất cả 
     4. Hiển thị sách
     5. Hiển thị tạp chí
     6. Hiển thị Báo
     0. Thoát`)
    let choice = -1;
     do {
         console.log(menu)
         choice = +readlineSync.question(' Enter choice: ')
         switch (choice) {
             case 1:
                 add();
                 break;
             case 2:
                 deleteLibrarian();
                 break;
             case 3:
                 display();
                 break;
             case 4:
                 displayBook();
                 break;
             case 5:
                 displayMagazine();
                 break;
             case 6:
                 displayNewspaper();
                 break;
         }
     } while (choice != 0);

}
main()