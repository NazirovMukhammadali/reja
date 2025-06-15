// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talab boling", // 0-20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "uzingizga ishlashni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq", // 60
// ];

// // CALLBACK function
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log("passed here 1");


// Asynchronous functionlar
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talab boling", // 0-20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "uzingizga ishlashni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq", // 60
// ];

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// }
// call via then/catch
// console.log("passed here 0");
// maslahatBering(25)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log("passed here 1");

// call via asyn/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }

// run();



// TASK A

// function count(letter, word) {   // 2ta parametr
//     let count = 0;   // hisoblashni boshlash
//     for (let i = 0; i < word.length; i++) {   // wordni har bir harfini tekshirish
//         if (word[i] === letter) {   // letterga teng bolsa
//             count++;    // qiymatni oshiradi
//         }
//     }
//     return count;    // qiymat qaytaradi
// };

// console.log(count("e", "engineer"));


// console.log("===== EXECUTE =====");

// // DEFINE
// function qoldiqliBolish(a, b, callback) {
//     if (b === 0) {
//         callback("Mahraj nolga teng bololmaydi", null);
//     } else {
//         callback(null, a % b);
//     }
// }

// // CALL
// qoldiqliBolish(100, 7, (err, data) => {
//     if (err) console.log("Error:", err);
//     else {
//         console.log("data:", data);
//     }
// });

// console.log("===== EXECUTE =====");

// // DEFINE
// function qoshish(a, b, callback) {
//     if (b === 10) {
//         callback("bizga 20 soni kerak!", null);
//     } else {
//         callback(null, a + b);
//     }
// }

// // CALL
// qoshish(1, 20, (err, data) => {
//     if (err) console.log("Error:", err);
//     else {
//         console.log("data:", data);
//     }
// });

// TASK B

// function countDigits(qiymat) {
//     let count = 0;
//     qiymat.split('').forEach(element => {
//         if (element >= '0' && element <= '9') {
//             count++;
//         }


//     });

//     return count;
// }
// console.log(countDigits("ab12cd34"));
// console.log(countDigits("ab12cd34if56"));
// console.log(countDigits("ab12cd3420230"));


// TASK C

// function checkContent(string1, string2) {
//     let str1 = string1.split("").sort().join(""); // sort argument olmaydi
//     let str2 = string2.split("").sort().join("");
//     return str1 === str2;
// }

// console.log(checkContent("mitgroup", "groupmit"));
// console.log(checkContent("mitgroup", "groupmi1"));
// console.log(checkContent("mitgrou", "groupmi"));


// TASK D

class Shop {
    constructor(non, lagmon, cola) {
        this.mahsulotlar = {
            non,
            lagmon,
            cola
        };
    };

    vaqt() {
        const h = new Date();
        const s = h.getHours();
        const m = h.getMinutes();
        return `${s}:${m < 10 ? '0' + m : m}`;
    };

    qoldiq() {
        console.log(`${this.vaqt()} ${this.mahsulotlar.non}ta non, ${this.mahsulotlar.lagmon}ta lagmon va ${this.mahsulotlar.cola}ta cola mavjud!`);
    };

    sotish(nomi, soni) {
        if (nomi === 'non' || nomi === 'lagmon' || nomi === 'cola') {
            this.mahsulotlar[nomi] -= soni;
            console.log(`${this.vaqt()} ${soni}ta ${nomi} sotildi.`);
        };
    };


    qabul(nomi, soni) {
        if (nomi === 'non' || nomi === 'lagmon' || nomi === 'cola') {
            this.mahsulotlar[nomi] += soni;
            console.log(`${this.vaqt()} ${soni}ta ${nomi} qabul qilindi.`);
        };
    };
};



const shop1 = new Shop(10, 10, 10);
shop1.qoldiq();
shop1.sotish('non', 5);
shop1.sotish('lagmon', 1);
shop1.qabul('cola', 1);
shop1.qoldiq();