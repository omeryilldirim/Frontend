//! JS practice
//? 1. Yetkisiz kullanıcılardan korunmak için e-posta adreslerini gizlemek için bir JavaScript fonksiyonu yazın. 
// Test Verisi: console.log(protect_email("robin_singh@example.com")); "robin...@example.com"

const protectEmail = (email) => {
    const indexNo = email.indexOf("@")
    const splitted = email.split("")
    splitted.splice(indexNo-5, 5, '...')
    const newStr = splitted.join("")
    return newStr
}

console.log(protectEmail("robin_singh@example.com"))

//? 2. Bir dizideki tüm elemanların ortalamasını hesaplayan bir JavaScript fonksiyonu yazın. Test Verisi: console.log(average([1,2,3,4,5])); 3



//? 3. verilen pozitif olmayan bir tamsayıyı argüman olarak alan ve rakamları azalan sırada döndüren bir fonksiyon yazmaktır. Özetle, rakamları yeniden düzenleyerek mümkün olan en yüksek sayıyı oluşturun.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321



// 4. Verilen bir string'de sesli harfleri (a, e, i, o, u) filtreleyin ve sadece sesli harfler olmayan kalan harfleri birleştirin.
// Examples:
// Input: "day" Output: "d"
// Input: "apple" Output: "ppl"
// Input: "javascript" Output: "jvscrpt"




// 5- Bir JavaScript dizisinde tekrar eden  değerleri bulan bir JavaScript programı yazın.
// Examples:
// Input: [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10]
// Output: 1, 2, 9



// 6. Elemanları sayılardan oluşan bir listenin elemanlarının karelerinin toplamını bulan bir JavaScript programı yazın.
// Examples:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: 285
