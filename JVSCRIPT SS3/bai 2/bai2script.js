let borrowCount ;
let overduePeople = 0 ;
do {
    borrowCount =  +prompt("Hom nay co bao nhieu luot muon sach");
} while (isNaN(borrowCount) || borrowCount <= 0 );

for (let i = 0  ; i < borrowCount ; i++ ){
    console.log(`Lan thu ${i + 1}`);
    let userName = prompt(`Lượt ${i + 1} - Tên người mượn:`);
    let bookName = prompt(`Lượt ${i + 1} - Tên sách:`);
let days ;
do {
    days = +prompt("Nhap so ngay muon (1-30)");

} while (isNaN(days) || days < 1 || days > 30 );

if(days <= 14){
    console.log(`${userName}  , co sach${bookName} tra DUNG HAN `);
    alert(`${userName}  tra DUNG HAN`);
} else if( (days >= 15 && days <=21 ) ) {
    console.log(`${userName}  , co sach${bookName} TRA MUON NHE , phat nhac nho `);
    alert(`${userName} TRA MUON NHE , phat nhac nho `);
    overduePeople++ ;
} else {
    console.log(`${userName}  , co sach${bookName} qua han nghiem trong  `);
    alert(`${userName}  , qua han nghiem trong , can ghi bien ban `);
    overduePeople++ ;
}
}

console.log(`so luot tra sach ${borrowCount}`);
console.log(`so luot tra sach MUON  ${overduePeople}`);