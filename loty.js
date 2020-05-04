var passengers = document.querySelectorAll("li[data-identyfikator-pasazera]");
var highest = passengers[0];
for (var i = 1; i < passengers.length; i++) {
    if (highest.getAttribute("data-identyfikator-pasazera") <
        passengers[i].getAttribute("data-identyfikator-pasazera")) {
        highest = passengers[i];
    }
}
console.log(highest.textContent);
//# sourceMappingURL=loty.js.map