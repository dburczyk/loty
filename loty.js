var passengers = document.querySelectorAll("li[data-identyfikator-pasazera]");
var highest = passengers[0];
for (var i = 1; i < passengers.length; i++) {
    if (highest["data-identyfikator-pasazera"] < passengers[i]["data-identyfikator-pasazera"]) {
        highest = passengers[i];
    }
}
console.log(highest);
//# sourceMappingURL=loty.js.map