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
    days = +prompt("Nhap so ngay muon (1-30)");

} while (isNaN(days) || days < 1 || days >30 );

if(days > 14){
    console.log(`${userName}  , co sach${bookName} co thoi gian muon vuot muc `);
    alert(`${userName}  , co sach${bookName} KHONG MUON DUOC SACH `)
} else {
     console.log(`${userName}  , co sach${bookName} DUOC PHEP muon sach `);
    alert(`${userName}  , co sach${bookName} da muon THANH CONG!`)
}
}