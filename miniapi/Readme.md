## Clase 2 - Manejo de Archivos JSON

### Conceptos previos
[Instalacion de node](docs/instalacion.md)
[Proyecto Base Express](docs/express.md)
[Abrir un Archivo CSV](docs/file-csv.md)

En esta clase modificamos el archivo CSV para leer los datos a partir de un JSON el cual colocamos en la carpeta ```data/movies.json```.

### Parseo de un archivo JSON
En Javascript para convertir un archivo JSON a un objeto se utiliza la libreria nativa **JSON** con la cual es muy simple.

````
const file = fs.readFileSync("archivo.json", 'utf-8') //Esta linea abre el archivo como string
const miobjeto = JSON.parse(file) //Aqui se convierte (parsea) como un objeto
````

Una vez que el archivo lo tenemos como un objeto en la app lo que tenemos que hacer es procesarlo, para nuestro ejemplo utilizamos el campo pais y obtuvimos los paises únicos.

````
{
  title: 'Snow White and the Seven Dwarfs',
  'Directed by': [
    'David Hand (supervising)',
    'William Cottrell',
    'Wilfred Jackson',
    'Larry Morey',
    'Perce Pearce',
    'Ben Sharpsteen'
  ],
  'Produced by': 'Walt Disney',
  'Written by': [
    'Ted Sears',
    'Richard Creedon',
    'Otto Englander',
    'Dick Rickard',
    'Earl Hurd',
    'Merrill De Maris',
    'Dorothy Ann Blank',
    'Webb Smith'
  ],
  'Based on': [ 'Snow White', 'by The', 'Brothers Grimm' ],
  Starring: [
    'Adriana Caselotti',
    'Lucille La Verne',
    'Harry Stockwell',
    'Roy Atwell',
    'Pinto Colvig',
    'Otis Harlan',
    'Scotty Mattraw',
    'Billy Gilbert',
    'Eddie Collins',
    'Moroni Olsen',
    'Stuart Buchanan'
  ],
  'Music by': [ 'Frank Churchill', 'Paul Smith', 'Leigh Harline' ],
  'Production company': 'Walt Disney Productions',
  'Distributed by': 'RKO Radio Pictures',
  'Release date': [
    'December 21, 1937 ( Carthay Circle Theatre , Los Angeles , CA )',
    'February 4, 1938 (United States)'
  ],
  'Running time': '83 minutes',
  Country: 'United States',
  Language: 'English',
  Budget: '$1.49 million',
  'Box office': '$418 million',
  'Running time (int)': 83,
  'Budget (float)': 1490000,
  'Box office (float)': 418000000,
  'Release date (datetime)': 'December 21, 1937',
  imdb: '7.6',
  metascore: '95',
  rotten_tomatoes: null
}
````

A partir de este objeto vamos a extraer unicamente los paises, para lo que utilizamos un ciclo for (map)

````
const paises = movies.map((item)=>item.Country)

````
Recordar que en una **Arrow Function** cuando solo devolvemos un valor no requerimos **return**, pero en caso de devolver mas de un valor requerimos incluir ```{``` y el valor de **return**

````
const paises = movies.map((item)=>{
    return {
        item.Country,
        item.title,
        item['Release date']
    }
})
````

## Referencias

[Mdn Web docs - mozilla.org](https://developer.mozilla.org/)
[Tutorial Paso a paso](https://medium.com/@kailasdumane100/getting-started-with-express-js-step-by-step-guide-to-build-your-first-server-6bfd4eb3876)
[Node en 35 Minutos](https://www.youtube.com/watch?v=SccSCuHhOw0)
[Node Completo Curso](https://www.youtube.com/watch?v=yB4n_K7dZV8&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7)