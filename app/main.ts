// Parte relativa a criação "fake" da API.

// Imports for loading & configuring the in-memory web api
import { provide }    from '@angular/core';
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

// Fim

// Importar Boostrap do Angular
import { bootstrap }    from '@angular/platform-browser-dynamic';

// Importar Providers do HTTP do Angular
import { HTTP_PROVIDERS } from '@angular/http';

// Importar AppComponent.
import { AppComponent } from './components/app.component';

// Realizar bootstrap.
// Porque o registro esta sendo feito a nivel de aplicação, e não de componente (AppComponent)?
// Iremos considerar que a API não esta pronta, e por isso, iremos criar uma fake.
// Desta forma, iremos "sobrescrever"" o XHRBackend com o InMemoryBackendService e SEED_DATA com o InMemoryDataService
bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: InMemoryDataService })     // in-mem server data
]);