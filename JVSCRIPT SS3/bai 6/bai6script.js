
let totalFeedback = 0;
let highSeverityComplaints = 0; 
let mediumSeverityComplaints = 0; 
let lowSeverityComplaints = 0; 
let improvementSuggestions = 0;
let positiveFeedbacks = 0;



while (true) {
    let continueSession = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");

   
    if (continueSession === null || continueSession.toLowerCase() === "không" || continueSession.toLowerCase() === "khong") {
        break;
    }


    let readerName = "";
    while (readerName === "" || readerName === null) {
        readerName = prompt("Tên bạn đọc (bắt buộc):");
        if (readerName === "" || readerName === null) {
            alert("Tên bạn đọc không được để trống!");
        }
    }

    let libraryCardId = prompt("Mã thẻ bạn đọc (nếu có, có thể để trống):");
    let feedbackType = parseInt(prompt("Loại phản hồi (1: Khiếu nại, 2: Đề xuất, 3: Khen ngợi):"));
    let contentReference = prompt("Nội dung :");

    totalFeedback++;


    if (feedbackType === 1) {
        // hoi muc do nghiem trong
        let severityLevel = parseInt(prompt("Mức độ nghiêm trọng (1: Nhẹ, 2: Trung bình, 3: Nghiêm trọng):"));

        if (severityLevel === 3) {
            highSeverityComplaints++;
            console.log("Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
        } 
        else if (severityLevel === 2) {
            mediumSeverityComplaints++;
            console.log("Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
        } 
        else {
            lowSeverityComplaints++;
            console.log("Xử lý ngay tại quầy - Khiếu nại nhẹ");
        }
    } 
    else if (feedbackType === 2) {
        
        improvementSuggestions++;
        console.log("Cảm ơn! Đề xuất đã được ghi nhận");
    } 
    else if (feedbackType === 3) {
       
        positiveFeedbacks++;
        console.log("Cảm ơn bạn đã phản hồi tích cực!");
    } 
    else {
        console.log("Loại phản hồi không xác định.");
    }
}


console.log("---------------------------------------");
console.log("shift report");
console.log("Tổng feedback " + totalFeedback);
console.log("Khiếu nại nghiêm trọng : " + highSeverityComplaints);
console.log("Khiếu nại thường " + mediumSeverityComplaints);
console.log("Khiếu nại nhỏ " + lowSeverityComplaints);
console.log("Đề xuất cải thiện " + improvementSuggestions);
console.log("Khen ngợi" + positiveFeedbacks);

console.log("---------------------------------------");
