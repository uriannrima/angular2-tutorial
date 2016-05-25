"use strict";
// Modelo de Heroi.
var Hero = (function () {
    // Construtor do Heroi.
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map