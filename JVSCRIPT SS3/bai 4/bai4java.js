
let totalBooks = 0;
let lostBooks = 0;
let outOfStockBooks = 0;
let highInventoryBooks = 0;
let normalInventoryBooks = 0;

let continueInventory = true;

do {
  
    let choice = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)").toLowerCase();
    if (choice === "không" || choice === "khong") {
        continueInventory = false;
    } else if (choice === "có" || choice === "co") {
        let bookId, bookName, bookQuantity, bookStatus;
        do {
            bookId = prompt("Nhập Mã sách (không được để trống):");
        } while (!bookId || bookId.trim() === "");
        bookName = prompt("Nhập Tên sách:");
        do {
            bookQuantity = parseInt(prompt("Nhập số lượng thực tế trong kho:"));
        } while (isNaN(bookQuantity) || bookQuantity < 0);
        do {
            bookStatus = parseInt(prompt("Tình trạng sách:\n1 - Bình thường\n2 - Mất"));
        } while (bookStatus !== 1 && bookStatus !== 2);
        totalBooks++; 
        if (bookStatus === 2) {
            console.log(`Sách ID ${bookId}: Sách mất`);
            lostBooks++;
        } else if (bookStatus === 1 && bookQuantity === 0) {
            console.log(`Sách ID ${bookId}: Sách hết`);
            outOfStockBooks++;
        } else if (bookStatus === 1 && bookQuantity >= 10) {
            console.log(`Sách ID ${bookId}: Sách tồn kho nhiều`);
            highInventoryBooks++;
        } else if (bookStatus === 1 && bookQuantity >= 1 && bookQuantity <= 9) {
            console.log(`Sách ID ${bookId}: Sách tồn kho bình thường`);
            normalInventoryBooks++;
        }
    } else {
        alert("Vui lòng chỉ nhập 'có' hoặc 'không'.");
    }
} while (continueInventory);

console.log("--- BÁO CÁO KIỂM KÊ ---");
console.log(`Tổng số sách đã kiểm kê: ${totalBooks} cuốn`);
console.log(`Số sách mất: ${lostBooks} cuốn`);
console.log(`Số sách hết hàng: ${outOfStockBooks} cuốn`);
console.log(`Số sách tồn kho nhiều: ${highInventoryBooks} cuốn`);
console.log(`Số sách tồn kho bình thường: ${normalInventoryBooks} cuốn`);