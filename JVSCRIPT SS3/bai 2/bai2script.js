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
    alert(`${userName}  trả đúng hạn`);
} else if( (days >= 15 && days <=21 ) ) {
    console.log(`${userName}  , co sach${bookName} TRA MUON NHE , phat nhac nho `);
    alert(`${userName} TRẢ MUỘN NHẸ , phạt nhắc nhở `);
    overduePeople++ ;
} else {
    console.log(`${userName}  , co sach${bookName} quá hạn nghiêm trọng  `);
    alert(`${userName}  ,cần ghi biên bản `);
    overduePeople++ ;
}
}

console.log(`Số lượt trả ${borrowCount}`);

console.log(`Số lượt muộn ${overduePeople}`);
