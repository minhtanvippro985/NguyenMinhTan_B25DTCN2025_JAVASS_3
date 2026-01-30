
let password = "admin123";
let attempts = 0;
let isLoggedIn = false;

do {
    let input = prompt("Nhập mật khẩu để truy cập hệ thống:");
    attempts++;

    if (input === password) {
        alert("Đăng nhập thành công!");
        isLoggedIn = true;
        break;
    } else {
        alert("Sai! Bạn còn " + (3 - attempts) + " lần.");
    }

    if (attempts >= 3) {
        alert("Hệ thống bị khóa!");
       
        throw new Error("Truy cập bị từ chối."); 
    }
} while (attempts < 3);


if (isLoggedIn) {
    while (true) {
        let choice = prompt(
            "CHỌN CHỨC NĂNG:\n" +
            "1. Nhập lô sách mới\n" +
            "2. Vẽ sơ đồ kệ sách\n" +
            "3. Thoát"
        );

        if (choice === "1") {
           
            let count = parseInt(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"));
            let total = 0;

            for (let i = 1; i <= count; i++) {
                let price = parseFloat(prompt("Nhập giá tiền cho cuốn sách thứ " + i + ":"));

                if (price <= 0 || isNaN(price)) {
                    alert("Giá tiền không hợp lệ! Bỏ qua cuốn này.");
                    continue; 
                }
                total += price;
            }
            alert("Tổng giá trị nhập kho đợt này là: " + total.toLocaleString() + " VNĐ");

        } else if (choice === "2") {
           
            let map = "--- SƠ ĐỒ KỆ SÁCH ---\n";
            for (let khu = 1; khu <= 3; khu++) {
                for (let ke = 1; ke <= 5; ke++) {
                    if (khu === 2 && ke === 3) {
                        map += `Khu vực ${khu} - Kệ ${ke} (Đang sửa chữa)\n`;
                        continue; 
                    }
                    map += `Khu vực ${khu} - Kệ ${ke}\n`;
                }
            }
            alert(map);

        } else if (choice === "3") {
         
            alert("Hẹn gặp lại!");
            break;
        } else {
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại.");
        }
    }
}