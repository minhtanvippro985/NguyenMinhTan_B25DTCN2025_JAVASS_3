let borrowCount ;
do {
    borrowCount =  +prompt("Hom nay co bao nhieu luot muon sach");
} while (isNaN(borrowCount) || borrowCount <= 0 );
for (let i = 0  ; i <= borrowCount ; i++ ){
    console.log(`Lan thu ${i + 1}`);
    let userName = prompt(`Lượt ${i + 1} - Tên người mượn:`);
    let bookName = prompt(`Lượt ${i + 1} - Tên sách:`);
let days ;
do {
    days = +prompt("Nhập số ngày mượn (1-30)");

} while (isNaN(days) || days < 1 || days >30 );

if(days > 14){
    console.log(`${userName}  , có sách${bookName} có thời gian vượt mức`);
    alert(`${userName}  , có sách${bookName} KHÔNG DUỢC MƯỢN SÁCH `)
} else {
     console.log(`${userName}  , CÓ SÁCH ${bookName} ĐƯỢC PHÉP MƯỢN SÁCH `);
    alert(`${userName}  , có sách ${bookName} ĐÃ MƯỢN THÀNH CÔNG!`)
}

}
