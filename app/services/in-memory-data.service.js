"use strict";
// Serviço contendo os dados "em memoria" do que seria a API.
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    // Método para criar o DataBase.
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Mr. Nice', power: 'Super Hot', alterEgo: 'Luciano Lima' },
            { id: 2, name: 'Narco', "power": "Super Flexible" },
            { id: 3, name: 'Bombasto', power: 'Super Hot' },
            { id: 4, name: 'Celeritas', "power": "Super Flexible" },
            { id: 5, name: 'Magneta', power: 'Super Hot' },
            { id: 6, name: 'RubberMan', "power": "Super Flexible" },
            { id: 7, name: 'Dynama', power: 'Super Hot' },
            { id: 8, name: 'Dr IQ', "power": "Weather Changer" },
            { id: 9, name: 'Magma', power: 'Super Hot' },
            { id: 10, name: 'Tornado', "power": "Weather Changer" }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map