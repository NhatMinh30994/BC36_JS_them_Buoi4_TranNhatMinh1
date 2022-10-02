// =========Bài 2=========
/**
 * INPUT: tháng, năm
 *
 * PROCESS:
 *     1. lấy input
 *     2. Số ngày của các tháng 1 -> tháng 12
 *     3. Số ngày của tháng 2 theo năm thường và năm nhuận
 * OUTPUT: kết quả số ngày theo tháng, năm
 */
var thang;
var nam;
thang = 10;
nam = 2022;
switch(thang){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('tháng có 31 ngày');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('tháng có 30 ngày');
        break;
    case 2:
        if (nam % 4 == 0 && nam % 100 != 0 || nam % 400 == 0){
            console.log('năm này là năm nhuận nên tháng có 29 ngày');
        }else{
            console.log('tháng này có 28 ngày');
        }
        break;
    default:
        console.log("Tháng nhập vào ko hợp lệ");
}
console.log("tháng",thang, "năm", nam)

// =========Bài 3=========
/**
 * INPUT: số nguyên 3 chữ số (n)
 *
 * PROCESS:
 *     1. lấy input
 *     2. Tách ký số theo hàng trăm, chục, đơn vị
 *     3. Switch cách đọc số theo từng vị trí trăm, chục, đơn vị
 * OUTPUT: cách đọc số nguyên 3 chữ số
 */
var n = 0;
n = 155;
if (n >= 100 && n <= 999){
    var tram = Math.floor(n/100);
    var chuc = Math.floor(n% 100/10);
    var donvi = n % 10;
    
    switch(tram){
        case 1:
            console.log('Mot Tram');
            break;
        case 2:
            console.log('Hai Tram');
            break;
        case 3:
            console.log('Ba Tram');
            break;           
        case 4:
            console.log('Bon Tram');
            break;           
        case 5:
            console.log('Nam Tram');
            break;           
        case 6:
            console.log('Sau Tram');
            break;           
        case 7:
            console.log('Bay Tram');
            break;            
        case 8:
            console.log('Tam Tram');
            break;          
        case 9:
            console.log('Chin Tram');
            break;
    }

    switch(chuc){
        case 0: if(donvi == 0){
            console.log('');
            break;
        }else{
            console.log('Le');
            break;
        }
        case 1:
            console.log('Muoi');
            break;
        case 2:
            console.log('Hai Muoi');
            break;
        case 3:
            console.log('Ba Muoi');
            break;           
        case 4:
            console.log('Bon Muoi');
            break;
        case 5:
            console.log('Nam Muoi');
            break; 
        case 6:
            console.log('Sau Muoi');
            break;           
        case 7:
            console.log('Bay Muoi');
            break;            
        case 8:
            console.log('Tam Muoi');
            break;          
        case 9:
            console.log('Chin Muoi');
            break;
    }
    
    switch(donvi){
        case 5: if(chuc != 0){
            console.log('Lam');
            break;
        }else{
            console.log('Nam');
            break;
        }
        case 1:
            console.log('Mot');
            break;
        case 2:
            console.log('Hai');
            break;
        case 3:
            console.log('Ba');
            break;           
        case 4:
            console.log('Bon');
            break;         
        case 6:
            console.log('Sau');
            break;           
        case 7:
            console.log('Bay');
            break;            
        case 8:
            console.log('Tam');
            break;          
        case 9:
            console.log('Chin');
            break;
    }
    console.log(n)
}