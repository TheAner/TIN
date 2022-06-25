// Funkcja sprawdzająca, czy przekazany ciąg jest palindromem
function checkPalindrom(str) {
    console.log(str == str.split('').reverse().join(''));
}