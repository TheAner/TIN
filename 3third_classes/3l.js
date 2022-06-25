// Napisz funkcje konstruktora, tworzącą obiekty reprezentujące studentów – mają zawierać imię, nazwisko, nr indeksu, tablicę z ocenami i metodę wypisującą imię, nazwisko i średnią ocen
class Student {
    constructor(name, surname, index, grades) {
        this.name = name;
        this.surname = surname;
        this.index = index;
        this.grades = grades;
    }

    print() {
        if (Array.isArray(this.grades)) {
            let sum = times.reduce((a, b) => a + b, 0);
            let avg = (sum / times.length) || 0;

            console.log(this.name + ' ' + this.surname + '; średnia: ' + avg);
        } else {
            console.log('Wrong grades var type');
        }
    }
}