// Funkcja przyjmująca ciąg jako parameter i zwracająca najdłuższe słowo w ciągu
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function (str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    console.log(word);
}