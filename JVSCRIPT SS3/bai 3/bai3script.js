let addRequest;
let userName;
let bookName;
let baseDate;
let additionalDate;
let failCount = 0 ;
let successCount = 0 ;

do {

    addRequest = parseInt(prompt("1. Thêm moi \n2. Dừng"));

    if (isNaN(addRequest) || addRequest < 1 || addRequest > 2) {
        console.log("Chi nhập số từ 1-2");
        continue;
    }

    if (addRequest === 1) {
        userName = prompt("Nhập tên bạn đọc");
        bookName = prompt("Nhập tên bạn đọc");
        do {
            baseDate = parseInt(prompt("Nhập số ngày muợn >= 1"));
            if (isNaN(baseDate) || baseDate <= 0) {
                console.log("Ngay không hợp lệ");
            }
        } while (isNaN(baseDate) || baseDate <= 0);
        
        do {
            additionalDate = parseInt(prompt("Nhâp ngày thêm >= 1"));
            if (isNaN(additionalDate) || additionalDate <= 0) {
                console.log("Ngày thêm không hợp lệ");
            }
        } while (isNaN(additionalDate) || additionalDate <= 0);
        

        if(baseDate + additionalDate > 60){
            console.log(`${userName} không được gia han (vượt tối đa)`);
            failCount++ ;
        } else if( baseDate + additionalDate > 45  ){
             console.log(`${userName} không được gia hạn (quá lâu)`);
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
