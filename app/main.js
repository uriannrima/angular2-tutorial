// Parte relativa a criação "fake" da API.
"use strict";
// Imports for loading & configuring the in-memory web api
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./services/in-memory-data.service');
// Fim
// Importar Boostrap do Angular
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// Importar Providers do HTTP do Angular
var http_2 = require('@angular/http');
// Importar AppComponent.
var app_component_1 = require('./components/app.component');
// Realizar bootstrap.
// Porque o registro esta sendo feito a nivel de aplicação, e não de componente (AppComponent)?
// Iremos considerar que a API não esta pronta, e por isso, iremos criar uma fake.
// Desta forma, iremos "sobrescrever"" o XHRBackend com o InMemoryBackendService e SEED_DATA com o InMemoryDataService
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_2.HTTP_PROVIDERS,
    core_1.provide(http_1.XHRBackend, { useClass: angular2_in_memory_web_api_1.InMemoryBackendService }),
    core_1.provide(angular2_in_memory_web_api_1.SEED_DATA, { useClass: in_memory_data_service_1.InMemoryDataService }) // in-mem server data
]);
//# sourceMappingURL=main.js.map