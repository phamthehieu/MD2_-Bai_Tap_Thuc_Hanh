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
    let id = +readlineSync.question('Enter id :  ');
    let producer = readlineSync.question('Enter producer :  ');
    let issueNumber = +readlineSync.question('Enter issueNumber :  ');
    let author = readlineSync.question('Enter author :  ');
    let pageNumber = +readlineSync.question('Enter tier :  ');
    let book = new Book(id, producer, issueNumber, author, pageNumber);
    if (librarianManager.check(book.getId()) === -1) librarianManager.add(book);
    else {
        console.log('---------Id đã tồn tại, vui lòng nhập lại-----------')
        addBook()
    }
}

function addMagazine() {
    console.log('---------Them Newspaper Moi---------')
    let id = +readlineSync.question('Enter id :  ');
    let producer = readlineSync.question('Enter producer :  ');
    let issueNumber = +readlineSync.question('Enter issueNumber :  ');
    let releaseDate = +readlineSync.question('Enter releaseDate :  ');
    let magazine = new Magazine(id, producer, issueNumber, releaseDate);
    if (librarianManager.check(magazine.getId()) === -1) librarianManager.add(magazine);
    else {
        console.log('---------Id đã tồn tại, vui lòng nhập lại-----------')
        addNewspaper()
    }
}

function addNewspaper() {
    console.log('---------Them Magazine Moi---------')
    let id = +readlineSync.question('Enter id :  ');
    let producer = readlineSync.question('Enter producer :  ');
    let issueNumber = +readlineSync.question('Enter issueNumber :  ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber :  ');
    let releaseMonth = +readlineSync.question('Enter releaseMonth :  ');
    let newspaper = new Newspaper(id, producer, issueNumber, releaseNumber, releaseMonth);
    if (librarianManager.check(newspaper.getId()) === -1) librarianManager.add(newspaper);
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
     7. Chỉnh sửa thông tin
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
            case 7:
                edit()
                break;
        }
    } while (choice != 0);

}

main()

function edit() {
    let idEdit = +readlineSync.question("Enter ID Edit: ");
    let index = librarianManager.searchDocumentById(idEdit);
    if (index === -1) {
        console.log(" khong co ")
    } else {
        if (librarianManager.listLibrarian[librarianManager.searchDocumentById(idEdit)] instanceof Book) {
            editBook(idEdit);
        }
        if (librarianManager.listLibrarian[librarianManager.searchDocumentById(idEdit)] instanceof Newspaper) {
            editNewspaper(idEdit);
        }
        if (librarianManager.listLibrarian[librarianManager.searchDocumentById(idEdit)] instanceof Magazine) {
            editMagazine(idEdit);
        }
    }
}

function editBook(idEdit: number) {
    let temp = idEdit;
    let menu = `---------Bạn muốn sửa thuộc tính nào-----------
    1.documentCode
    2.publishingCompany
    3.releaseNumber
    4.author
    5.pageNumber
    0.Ra menu chính`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question("Enter Choice Edit: ");
        switch (choice) {
            case 1:
                editID(temp);
                break
            case 2:
                editProducer(temp);
                break;
            case 3:
                editIssueNumber(temp);
                break;
            case 4:
                editAuthor(temp);
                break;
            case 5:
                editPageNumber(temp);
                break;
        }
    } while (choice != 0)
}

function editNewspaper(idEdit: number) {
    let temp = idEdit;
    let menu = `---------Bạn muốn sửa thuộc tính nào-----------
    1.documentCode
    2.publishingCompany
    3.releaseNumber
    4.author
    5.pageNumber
    0.Ra menu chính`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question("Enter Choice Edit: ");
        switch (choice) {
            case 1:
                editID(temp);
                break
            case 2:
                editProducer(temp);
                break;
            case 3:
                editIssueNumber(temp);
                break;
            case 4:
                editReleaseNumber(temp);
                break;
            case 5:
                editReleaseMonth(temp);
                break;
        }
    } while (choice != 0)
}

function editMagazine(idEdit: number) {
    let temp = idEdit;
    let menu = `---------Bạn muốn sửa thuộc tính nào-----------
    1.documentCode
    2.publishingCompany
    3.releaseNumber
    4.author
    5.pageNumber
    0.Ra menu chính`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question("Enter Choice Edit: ");
        switch (choice) {
            case 1:
                editID(temp);
                break
            case 2:
                editProducer(temp);
                break;
            case 3:
                editIssueNumber(temp);
                break;
            case 4:
                editReleaseDate(temp)
                break;
        }
    } while (choice != 0)
}

function editID(temp: number) {
    let documentID = +readlineSync.question('Enter DocumentID want to fix: ')
    let index = librarianManager.searchDocumentById(temp);
    librarianManager.listLibrarian[index].setId(documentID)
}

function editProducer(temp: number) {
    let documentProducer = readlineSync.question('Enter Producer want to fix: ')
    let index = librarianManager.searchDocumentById(temp);
    librarianManager.listLibrarian[index].setProducer(documentProducer)
}

function editIssueNumber(temp: number) {
    let documentIssueNumber = +readlineSync.question('Enter IssueNumber want to fix: ')
    let index = librarianManager.searchDocumentById(temp);
    librarianManager.listLibrarian[index].setIssueNumber(documentIssueNumber);
}

function editAuthor(temp: number) {
    let documentAuthor = readlineSync.question('Enter author want to fix: ')
    let index = librarianManager.searchDocumentById(temp)
    librarianManager.listBook[index].getAuthor(documentAuthor)
}

function editPageNumber(temp: number) {
    let documentEditPageNumber = +readlineSync.question('Enter EditPageNumber want to fix: ')
    let index = librarianManager.searchDocumentById(temp)
    librarianManager.listBook[index].getPageNumber(documentEditPageNumber);
}

function editReleaseDate(temp: number) {
    let documentReleaseDate = +readlineSync.question('Enter editReleaseDate want to fix: ')
    let index = librarianManager.searchDocumentById(temp);
    librarianManager.listMagazine[index].setReleaseDate(documentReleaseDate)
}

function editReleaseNumber(temp: number) {
    let documentReleaseNumber = +readlineSync.question('Enter ReleaseNumber want to fix: ')
    let index = librarianManager.searchDocumentById(temp);
    librarianManager.listNewspaper[index].setReleaseNumber(documentReleaseNumber)
}

function editReleaseMonth(temp: number) {
    let documentReleaseMonth = +readlineSync.question('Enter ReleaseMonth want to fix: ')
    let index = librarianManager.searchDocumentById(temp);
    librarianManager.listNewspaper[index].setReleaseMonth(documentReleaseMonth);
}