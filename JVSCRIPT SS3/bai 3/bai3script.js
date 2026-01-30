let addRequest;
let userName;
let bookName;
let baseDate;
let additionalDate;
let failCount = 0 ;
let successCount = 0 ;

do {

    addRequest = parseInt(prompt("1. Them moi \n2. Dung"));

    if (isNaN(addRequest) || addRequest < 1 || addRequest > 2) {
        console.log("Vui long chi nhap so tu 1-2");
        continue;
    }

    if (addRequest === 1) {
        userName = prompt("Nhap ten ban doc");
        bookName = prompt("Nhap ten sach");
        do {
            baseDate = parseInt(prompt("Nhap ngay muon >= 1"));
            if (isNaN(baseDate) || baseDate <= 0) {
                console.log("Ngay khong hop le");
            }
        } while (isNaN(baseDate) || baseDate <= 0);
        
        do {
            additionalDate = parseInt(prompt("Nhap ngay muon >= 1"));
            if (isNaN(additionalDate) || additionalDate <= 0) {
                console.log("Ngay them khong hop le");
            }
        } while (isNaN(additionalDate) || additionalDate <= 0);
        

        if(baseDate + additionalDate > 60){
            console.log(`${userName} khong duoc gia han (vuot toi da)`);
            failCount++ ;
        } else if( baseDate + additionalDate > 45  ){
             console.log(`${userName} khong duoc gia han (qua lau)`);
             failCount++;

        } else {
            console.log(`${userName} Gia hạn thành công`);
            successCount++;
        }
    }

} while (addRequest !== 2); 
console.log("--- THỐNG KÊ CA LÀM VIỆC ---");
console.log(`Số lần gia hạn thành công: ${successCount}`);
console.log(`Số lần gia hạn không thành công: ${failCount}`);