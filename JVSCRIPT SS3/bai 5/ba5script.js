
let totalRequests = 0;
let successCount = 0;
let deniedCount = 0;
let pendingCount = 0;

console.log("--- BẮT ĐẦU CA LÀM VIỆC ---");

// --- loop menu ---
while (true) {
    let tiepTuc = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

   
    if (tiepTuc === null || tiepTuc.toLowerCase() === "không" || tiepTuc.toLowerCase() === "khong") {
        break; 
    }
    let tenBanDoc = prompt("Tên bạn đọc:");
    let maSach = prompt("Mã sách muốn đặt trước:");
    let tenSach = prompt("Tên sách (tham khảo):");
    let soNgayCho = parseInt(prompt("Số ngày dự kiến chờ (số nguyên >= 1):"));
    let mucUuTien = parseInt(prompt("Mức độ ưu tiên (1: SV, 2: GV/NCS, 3: Nhân viên):"));

    totalRequests++;

    
    if (soNgayCho > 45) {
      
        deniedCount++;
        console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
    } 
    else if (mucUuTien === 3) {
       
        successCount++;
        console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
    } 
    else if (mucUuTien === 2 && soNgayCho <= 30) {
     
        successCount++;
        console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
    } 
    else if (mucUuTien === 1 && soNgayCho <= 21) {
    
        successCount++;
        console.log("Đặt trước thành công");
    } 
    else {
       
        pendingCount++;
        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
    }
}

console.log("---------------------------------------");
console.log("BÁO CÁO TỔNG HỢP CA LÀM VIỆC");
console.log("Tổng số yêu cầu đã xử lý: " + totalRequests);
console.log("Số yêu cầu được đặt trước thành công: " + successCount);
console.log("Số yêu cầu bị từ chối: " + deniedCount);
console.log("Số yêu cầu chờ xét duyệt: " + pendingCount);
console.log("---------------------------------------");