let kampus = {
    mhs: 'Citra',
    energi: 10,

    makan: function(kenyang) {
        this.energi = this.energi + kenyang;
        console.log(`Hai ${mhs}, selamat makan`);
    },
};

//kuis
const restaurant = {
    name: "Citra",
    city: "Padang",
    "favorite drink": "Jus Pokat",
    "favorite food": "Rendang",
    isVegan: true,
}
const name = restaurant.name;
const favoriteDrink = restaurant["favorite drink"];

console.log(restaurant);
console.log(name);
console.log(favoriteDrink);