/**
 * Bài 1
 * 
 * Đầu vào:
 * lấy giá trị input vào các biến n1, n2, n3
 * tạo các biến beNhat, mid, lonNhat
 * 
 * Xử lý:
 * if (n1 <= n2 && n1 <= n3 ){
    beNhat = n1; 
    if (n2 <= n3){
        mid = n2;
        lonNhat =  n3;
    } else {
        mid = n3;
        lonNhat =  n2;
    }
} else if (n2 <= n1 && n2 <= n3){
    beNhat = n2;
    if (n1 <= n3){
        mid = n1;
        lonNhat =  n3;
    } else {
        mid = n3;
        lonNhat =  n1;
    }
} else if (n3 <= n1 && n3 <= n2){
    beNhat = n3;
    if (n1 <= n2){
        mid = n1;
        lonNhat =  n2;
    } else {
        mid = n2;
        lonNhat =  n1;
    }
}

* Đầu ra:
* Xuất ra dãy số theo thứ tự tăng dần: beNhat - mid - lonNhat
 */

document.getElementById("sapXep").onclick = function () {
  //Đầu vào:
  let n1 = +document.getElementById("n1").value;
  let n2 = +document.getElementById("n2").value;
  let n3 = +document.getElementById("n3").value;
  let beNhat = 0,
    mid = 0,
    lonNhat = 0;

  //Xử lý:
  if (n1 <= n2 && n1 <= n3) {
    beNhat = n1;
    if (n2 <= n3) {
      mid = n2;
      lonNhat = n3;
    } else {
      mid = n3;
      lonNhat = n2;
    }
  } else if (n2 <= n1 && n2 <= n3) {
    beNhat = n2;
    if (n1 <= n3) {
      mid = n1;
      lonNhat = n3;
    } else {
      mid = n3;
      lonNhat = n1;
    }
  } else if (n3 <= n1 && n3 <= n2) {
    beNhat = n3;
    if (n1 <= n2) {
      mid = n1;
      lonNhat = n2;
    } else {
      mid = n2;
      lonNhat = n1;
    }
  }

  //Đầu ra:
  alert("Thứ tự tăng dần: " + beNhat + "-" + mid + "-" + lonNhat);
};

//Bài 2
/**
 * Đầu vào:
 * lấy thông tin input vào biến user
 *
 * Xử lý:
 *switch (user) {
    case "B": {
      alert("Xin chào Bố");
      break;
    }
    case "M": {
        alert("Xin chào Mẹ");
        break;
      }
    case "A": {
        alert("Xin chào Anh Trai");
        break;
      }  
    case "E": {
        alert("Xin chào Em Gái");
        break;
      }  
  }
 *
 * Đầu ra:
 * xuất ra câu chào hỏi
 */

document.getElementById("chaoHoi").onclick = function () {
  // Đầu vào:
  let user = document.getElementById("user").value;
  // Xử lý và đầu ra:
  switch (user) {
    case "B": {
      alert("Xin chào Bố");
      break;
    }
    case "M": {
      alert("Xin chào Mẹ");
      break;
    }
    case "A": {
      alert("Xin chào Anh Trai");
      break;
    }
    case "E": {
      alert("Xin chào Em Gái");
      break;
    }
  }
};

//Bài 3
/**
 * Đầu vào:
 * lấy giá trị input vào các biến so1, so2, so3
 * tạo các biến tongSoChan = 0 và tongSoLe = 0
 *
 * Xử lý:
 *if (!(so1 % 2)) {
    tongSoChan += 1;
  } else {
    tongSoLe += 1;
  }
  if (!(so2 % 2)) {
    tongSoChan += 1;
  } else {
    tongSoLe += 1;
  }
  if (!(so3 % 2)) {
    tongSoChan += 1;
  } else {
    tongSoLe += 1;
  }

 * Đầu ra:
 * xuất ra bao nhiêu số chẳn và bao nhiêu số lẻ
 */

document.getElementById("chanLe").onclick = function () {
  //Đầu vào:
  let so1 = +document.getElementById("so1").value;
  let so2 = +document.getElementById("so2").value;
  let so3 = +document.getElementById("so3").value;
  let tongSoChan = 0;
  let tongSoLe = 0;

  //Xử lý:
  if (!(so1 % 2)) {
    tongSoChan++;
  } else {
    tongSoLe++;
  }
  if (!(so2 % 2)) {
    tongSoChan++;
  } else {
    tongSoLe++;
  }
  if (!(so3 % 2)) {
    tongSoChan++;
  } else {
    tongSoLe++;
  }

  //Đầu ra:
  alert("Tổng số chẵn: " + tongSoChan + "  Tổng số lẻ: " + tongSoLe);
};

//Bài 4
/**
 * Đầu vào:
 * lấy giá trị input vào các biến edge1, edge2 và edge3
 * tạo các biến canhLonNhat, canhBe1 và canhBe2
 * Xử lý:
 * //Tìm cạnh lớn nhất và hai cạnh bé
    if (edge1 >= edge2 && edge1 >= edge3){
        canhLonNhat = edge1; 
        canhBe1 = edge2;
        canhBe2 = edge3;
    }   else if (edge2 >= edge1 && edge2 >= edge3){
        canhLonNhat = edge2;
        canhBe1 = edge1;
        canhBe2 = edge3;
    } else {
        canhLonNhat = edge3;
        canhBe1 = edge1;
        canhBe2 = edge2;
    }

    //Xét loại tam giác
    if(edge1 === edge2 && edge1 === edge3){
        alert("Đây là tam giác đều");
    } else if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3){
        alert("Đây là tam giác cân");
    } else if (
        canhLonNhat === Math.sqrt(canhBe1 * canhBe1 + canhBe2 * canhBe2)
    ){
        alert("Đây là tam giác vuông");
    } else {
        alert("Đây là một tam giác nào đó");
    }

 * Đầu ra:
 * xuất ra là tam giác gì
 */

document.getElementById("tamGiacGi").onclick = function () {
  //Đầu vào:
  let edge1 = +document.getElementById("edge1").value;
  let edge2 = +document.getElementById("edge2").value;
  let edge3 = +document.getElementById("edge3").value;
  let canhLonNhat = 0,
    canhBe1 = 0,
    canhBe2 = 0;

  //Xử lý và đầu ra:
  //Tìm cạnh lớn nhất và hai cạnh bé
  if (edge1 >= edge2 && edge1 >= edge3) {
    canhLonNhat = edge1;
    canhBe1 = edge2;
    canhBe2 = edge3;
  } else if (edge2 >= edge1 && edge2 >= edge3) {
    canhLonNhat = edge2;
    canhBe1 = edge1;
    canhBe2 = edge3;
  } else {
    canhLonNhat = edge3;
    canhBe1 = edge1;
    canhBe2 = edge2;
  }

  //Xét loại tam giác
  if (edge1 === edge2 && edge1 === edge3) {
    alert("Đây là tam giác đều");
  } else if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3) {
    alert("Đây là tam giác cân");
  } else if (canhLonNhat === Math.sqrt(canhBe1 * canhBe1 + canhBe2 * canhBe2)) {
    alert("Đây là tam giác vuông");
  } else {
    alert("Đây là một tam giác nào đó");
  }
};

// =====================================================================================================================================================================

// Bài tập thêm JS buổi 4
// Bài 1
/**
 * Đầu vào:
 * lấy giá trị input vào các biến day, month và year
 * tạo thêm 2 biến previousDay và followingDay cho ngày trước đó và ngày mai
 *
 * Xử lý:
 * -Nút ngày hôm trước:
 * +các tháng đặc biệt như tháng 1, 2, 3, 8 xử lý riêng do ngày 1 lùi về sau khác các tháng còn lại.
 * +các tháng như 4, 6, 9, 11 gom lại xử lý giống nhau do có 30 ngày trong tháng và ngày mùng 1 lùi về đều là ngày 31 của tháng trước đó.
 * +các tháng như 5, 7, 8, 10, 12 gom lại xử lý giống nhau do có 31 ngày trong tháng và ngày mùng 1 lùi về đều là ngày 30 của tháng trước đó.
 *
 * -Nút ngày mai:
 * +các tháng đặc biệt như tháng 2, 12 xử lý riêng do tháng 2 có 28 ngày và ngày 31/12 tiến lên là sang năm khác.
 * +các tháng 1, 3, 5, 7, 8, 10 gom lại xử lý giống nhau do có 31 ngày trong tháng.
 * +các tháng 4, 6, 9, 11 gom lại xử lý giống nhau do có 30 ngày trong tháng.
 *
 * Đầu ra:
 * xuất ra ngày hôm trước và ngày mai
 * */

//Button Ngày hôm trước
document.getElementById("ngayHomTruoc").onclick = function () {
  // Đầu vào:
  let day = +document.getElementById("day").value;
  let month = +document.getElementById("month").value;
  let year = +document.getElementById("year").value;
  let previousDay = "";
  let result1 = document.getElementById("result1");
  //Xử lý:
  switch (month) {
    case 1:
      if (day > 1 && day <= 31) {
        day -= 1;
        previousDay += day + "/" + month + "/" + year;
      } else if (day === 1) {
        year -= 1;
        day = 31;
        month = 12;
        previousDay += day + "/" + month + "/" + year;
      } else {
        alert("Ngày ko hợp lệ");
      }
      break;
    case 2:
      if (day > 1 && day <= 28) {
        day -= 1;
        previousDay += day + "/" + month + "/" + year;
      } else if (day === 1) {
        month -= 1;
        day = 31;
        previousDay += day + "/" + month + "/" + year;
      } else {
        alert("Ngày ko hợp lệ");
      }
      break;
    case 3:
      if (day > 1 && day <= 31) {
        day -= 1;
        previousDay += day + "/" + month + "/" + year;
      } else if (day === 1) {
        month -= 1;
        day = 28;
        previousDay += day + "/" + month + "/" + year;
      } else {
        alert("Ngày ko hợp lệ");
      }
      break;
    case 8:
      if (day > 1 && day <= 31) {
        day -= 1;
        previousDay += day + "/" + month + "/" + year;
      } else if (day === 1) {
        month -= 1;
        day = 31;
        previousDay += day + "/" + month + "/" + year;
      } else {
        alert("Ngày ko hợp lệ");
      }
      break;
    case 5:
    case 7:
    case 10:
    case 12:
      if (day > 1 && day <= 31) {
        day -= 1;
        previousDay += day + "/" + month + "/" + year;
      } else if (day === 1) {
        month -= 1;
        day = 30;
        previousDay += day + "/" + month + "/" + year;
      } else {
        alert("Ngày ko hợp lệ");
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (day > 1 && day <= 30) {
        day -= 1;
        previousDay += day + "/" + month + "/" + year;
      } else if (day === 1) {
        month -= 1;
        day = 31;
        previousDay += day + "/" + month + "/" + year;
      } else {
        alert("Ngày ko hợp lệ");
      }
      break;
    default:
      alert("Tháng ko hợp lệ");
  }

  //Đầu ra:
  result1.style.display = "block";
  result1.innerHTML = previousDay;
};

//Nút ngày mai:
document.getElementById("ngayMai").onclick = function () {
  //Đầu vào:
  let day = +document.getElementById("day").value;
  let month = +document.getElementById("month").value;
  let year = +document.getElementById("year").value;
  let followingDay = "";
  let result1 = document.getElementById("result1");

  //Xử lý:
  switch (month) {
    case 2:
      if (day >= 1 && day < 28) {
        day += 1;
        followingDay += day + "/" + month + "/" + year;
      } else if (day === 28) {
        month += 1;
        day = 1;
        followingDay += day + "/" + month + "/" + year;
      } else {
        alert("Ngày ko hợp lệ");
      }
      break;
    case 12:
      if (day >= 1 && day < 31) {
        day += 1;
        followingDay += day + "/" + month + "/" + year;
      } else if (day === 31) {
        year += 1;
        day = 1;
        month = 1;
        followingDay += day + "/" + month + "/" + year;
      } else {
        alert("Ngày ko hợp lệ");
      }
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      if (day >= 1 && day < 31) {
        day += 1;
        followingDay += day + "/" + month + "/" + year;
      } else if (day === 31) {
        month += 1;
        day = 1;
        followingDay += day + "/" + month + "/" + year;
      } else {
        alert("Ngày ko hợp lệ");
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (day >= 1 && day < 30) {
        day += 1;
        followingDay += day + "/" + month + "/" + year;
      } else if (day === 30) {
        month += 1;
        day = 1;
        followingDay += day + "/" + month + "/" + year;
      } else {
        alert("Ngày ko hợp lệ");
      }
      break;
    default:
      alert("Tháng ko hợp lệ");
  }

  //Đầu ra:
  result1.style.display = "block";
  result1.innerHTML = followingDay;
};

//Bài 2
/**
 * Đầu vào:
 * lấy giá trị input vào các biến month2 và year2
 * tạo biến day2 là chuỗi rỗng để gán kết quả vào
 * tạo biến result2 để xuất kết quả cho đầu ra
 *
 * Xử lý:
 * +tháng 2 có 28 ngày và 29 ngày nếu là năm nhuận nên sẽ xử lý riêng, năm nhuận xác định bằng: năm chia hết 4 nhưng ko chia hết cho 100 hoặc các năm chia hết cho 400.
 * +các tháng 1, 3, 5, 7, 8, 10, 12 gom lại chung nhóm do có 31 ngày.
 * +các tháng 4, 6, 9, 11 gom lại chung nhóm do có 30 ngày.
 *
 * Đầu ra:
 * xuất ra số ngày trong tháng
 */

document.getElementById("coBaoNhieuNgay").onclick = function () {
  //Đầu vào:
  let month2 = +document.getElementById("month2").value;
  let year2 = +document.getElementById("year2").value;
  let day2 = "";
  let result2 = document.getElementById("result2");

  //Xử lý:
  switch (month2) {
    case 2:
      if ((!(year2 % 4) && year % 100 !== 0) || !(year2 % 400)) {
        day2 += "Tháng có 29 ngày";
      } else {
        day2 += "Tháng có 28 ngày";
      }
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day2 += "Tháng có 31 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day2 += "Tháng có 30 ngày";
      break;
    default:
      alert("Tháng ko hợp lệ");
  }

  //Đầu ra:
  result2.style.display = "block";
  result2.innerHTML = day2;
};

//Bài 3
/**
 * Đầu vào:
 * lấy trị input vào num3
 * tạo biến result3 để xuất kết quả ở đầu ra
 *
 * Xử lý:
 *
 *
 * Đầu ra:
 * xuất kết quả cách đọc số
 */

document.getElementById("docSo").onclick = function () {
  //Đầu vào:
  let num3 = +document.getElementById("num3").value;
  let result3 = document.getElementById("result3");
  let hangTram = 0;
  let hangChuc = 0;
  let hangDonVi = 0;
  let cachDoc = "";

  //Xử lý:
  hangDonVi = num3 % 10;
  hangChuc = Math.floor((num3 % 100) / 10);
  hangTram = Math.floor(num3 / 100);
  //hàng trăm
  switch (hangTram) {
    case 1:
      cachDoc += "một trăm";
      break;
    case 2:
      cachDoc += "hai trăm";
      break;
    case 3:
      cachDoc += "ba trăm";
      break;
    case 4:
      cachDoc += "bốn trăm";
      break;
    case 5:
      cachDoc += "năm trăm";
      break;
    case 6:
      cachDoc += "sáu trăm";
      break;
    case 7:
      cachDoc += "bảy trăm";
      break;
    case 8:
      cachDoc += "tám trăm";
      break;
    case 9:
      cachDoc += "chín trăm";
      break;
  }
  //hàng chục
  switch (hangChuc) {
    case 1:
      cachDoc += " một mươi";
      break;
    case 2:
      cachDoc += " hai mươi";
      break;
    case 3:
      cachDoc += " ba mươi";
      break;
    case 4:
      cachDoc += " bốn mươi";
      break;
    case 5:
      cachDoc += " năm mươi";
      break;
    case 6:
      cachDoc += " sáu mươi";
      break;
    case 7:
      cachDoc += " bảy mươi";
      break;
    case 8:
      cachDoc += " tám mươi";
      break;
    case 9:
      cachDoc += " chín mươi";
      break;
  }
  //hàng đơn vị
  switch (hangDonVi) {
    case 1:
      cachDoc += " một";
      break;
    case 2:
      cachDoc += " hai";
      break;
    case 3:
      cachDoc += " ba";
      break;
    case 4:
      cachDoc += " bốn";
      break;
    case 5:
      cachDoc += " năm";
      break;
    case 6:
      cachDoc += " sáu";
      break;
    case 7:
      cachDoc += " bảy";
      break;
    case 8:
      cachDoc += " tám";
      break;
    case 9:
      cachDoc += " chín";
      break;
  }

  //Đầu ra:
  result3.style.display = "block";
  result3.innerHTML = cachDoc;
};


//Bài 4
/**
 * Đầu vào:
 *  lấy giá trị input vào các biến name4a, x1, y1, name4b, x2, y2, name4c, x3, y3, x4, y4.
 * tạo biến result4 để xuất kết quả đầu ra.
 * tạo biến xaNhat để chưa kết quả xuất ra.
 * tạo biến doanDuong1, doanDuong2, doanDuong3 tương ứng với khoảng cách từ nhà các sinh viên đến trường.
 * 
 * Xử lý:
 * tính đoạn đường bằng cách dùng dịnh lý Py-ta-go với 2 cạnh góc vuông là khoảng chênh lệch tọa độ trục x và y của nhà sinh viên so với trường học.
 * doanDuong1 = Math.sqrt((x4-x1)*(x4-x1) + (y4-y1)*(y4-y1));
 * tương tự cho doanDuong2 và doanDuong3
 * sau đó so sánh doanDuong1, doanDuong2, doanDuong3 để tìm ra kết quả  
 * 
 * Đầu ra:
 * xuất kết quả sinh viên có nhà xa trường nhất
 */

document.getElementById("toaDo").onclick = function(){
  // Đầu vào:
  let name4a = document.getElementById("name4a").value;
  let x1 = +document.getElementById("x1").value;
  let y1 = +document.getElementById("y1").value;
  let name4b = document.getElementById("name4b").value;
  let x2 = +document.getElementById("x2").value;
  let y2 = +document.getElementById("y2").value;
  let name4c = document.getElementById("name4c").value;
  let x3 = +document.getElementById("x3").value;
  let y3 = +document.getElementById("y3").value;
  let x4 = +document.getElementById("x4").value;
  let y4 = +document.getElementById("y4").value;
  let result4 = document.getElementById("result4");
  let xaNhat = "";
  let doanDuong1 = 0;
  let doanDuong2 = 0;
  let doanDuong3 = 0;
  //Xử lý:
  // Tính khoảng cách nhà sv và trường học
  doanDuong1 = Math.sqrt((x4-x1)*(x4-x1) + (y4-y1)*(y4-y1));
  doanDuong2 = Math.sqrt((x4-x2)*(x4-x2) + (y4-y2)*(y4-y2));
  doanDuong3 = Math.sqrt((x4-x3)*(x4-x3) + (y4-y3)*(y4-y3));
  //So sánh 3 khoảng cách để tìm ra đoạn đường nào xa nhất
  if (doanDuong1 >= doanDuong2 && doanDuong1 >= doanDuong3) {
    xaNhat += "Vậy nhà sinh viên " + name4a + " xa trường nhất";
  } else if (doanDuong2 >= doanDuong1 && doanDuong2 >= doanDuong3) {
    xaNhat += "Vậy nhà sinh viên " + name4b + " xa trường nhất";
  } else if (doanDuong3 >= doanDuong1 && doanDuong3 >= doanDuong2) {
    xaNhat += "Vậy nhà sinh viên " + name4c + " xa trường nhất";
  }

  //Đầu ra:
  result4.style.diplay = "block";
  result4.innerHTML = xaNhat;
}