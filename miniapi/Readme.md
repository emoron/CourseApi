## Clase 2 - Manejo de Archivos JSON

### Conceptos previos
[Instalacion de node](docs/instalacion.md)
[Proyecto Base Express](docs/express.md)
[Abrir un Archivo CSV](docs/file-csv.md)
[Abrir un Archivo JSON](docs/open-file-json.md)

## Grafica Javascript

En esta actividad vamos a reemplazar los datos de la gráfica que he colocado en el archivo ```views/index.ejs```. La idea es que los datos provengan desde el JSON de peliculas que hemos utilizado en clases anteriores.

Para ello requerimos modificar el código para devolver la siguiente estructura que vamos a inyectar en la vista.

`````
const data = [
        { year: "2025", count_movies: 13 },
        { year: "2020", count_movies: 6 },
        { year: "2004", count_movies: 12 },
        { year: "1995", count_movies: 20 },
        { year: "2007", count_movies: 23 }
      ];
`````



## Referencias

[Mdn Web docs - mozilla.org](https://developer.mozilla.org/)
[Tutorial Paso a paso](https://medium.com/@kailasdumane100/getting-started-with-express-js-step-by-step-guide-to-build-your-first-server-6bfd4eb3876)
[Node en 35 Minutos](https://www.youtube.com/watch?v=SccSCuHhOw0)
[Node Completo Curso](https://www.youtube.com/watch?v=yB4n_K7dZV8&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7)