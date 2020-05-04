let passengers = document.querySelectorAll("li[data-identyfikator-pasazera]") as NodeListOf<HTMLLIElement>;
let highest = passengers[0] as HTMLLIElement;
for (let i = 1; i < passengers.length; i++) {
    if (highest["data-identyfikator-pasazera"] < passengers[i]["data-identyfikator-pasazera"]) {
        highest = passengers[i];
    }
}

console.log(highest);