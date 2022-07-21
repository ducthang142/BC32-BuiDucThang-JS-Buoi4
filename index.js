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
  var n1 = +document.getElementById("n1").value;
  var n2 = +document.getElementById("n2").value;
  var n3 = +document.getElementById("n3").value;
  var beNhat = 0,
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
  var user = document.getElementById("user").value;
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
  var so1 = +document.getElementById("so1").value;
  var so2 = +document.getElementById("so2").value;
  var so3 = +document.getElementById("so3").value;
  var tongSoChan = 0;
  var tongSoLe = 0;

  //Xử lý:
  if (!(so1 % 2)) {
    tongSoChan ++;
  } else {
    tongSoLe ++;
  }
  if (!(so2 % 2)) {
    tongSoChan ++;
  } else {
    tongSoLe ++;
  }
  if (!(so3 % 2)) {
    tongSoChan ++;
  } else {
    tongSoLe ++;
  }

  //Đầu ra:
  alert("Tổng số chẵn: " + tongSoChan + "  Tổng số lẻ: " + tongSoLe)
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

document.getElementById("tamGiacGi").onclick = function() {
    //Đầu vào:
    var edge1 = +document.getElementById("edge1").value;
    var edge2 = +document.getElementById("edge2").value;
    var edge3 = +document.getElementById("edge3").value;
    var canhLonNhat = 0, canhBe1 = 0, canhBe2 = 0;

    //Xử lý và đầu ra:
    //Tìm cạnh lớn nhất và hai cạnh bé
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
}