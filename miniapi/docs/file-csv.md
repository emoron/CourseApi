## Archivos de texto
Un archivo CSV es un archivo de texto donde los campos vienen separados por commas, es uno de los formatos mas flexibles que existen por que se puede editar sin depender de un programa especial (tal como excel).

Comunmente se asocia el uso de tablas por su estructura columnar.

````
nombre,apellido,telefono
edgardo,morales,+52443388822
monica,naranjo,+3323232123
````

En node para abrir un archivo cualquiera utilizamos la libreria ```fs`` a continuacion un pequeño snippet para abrir un archivo

````
const fs = require('fs')
const file = fs.readFileSync('micarhivo.txt', 'utf-8')

````

La funcion ```readFileSync(archivo,codificacion)``` recibe dos parametros:
* El path o ruta al archivo que necesitamos abrir
* la codificacion en la que viene el archivo, la codificacion es importante para respetar los acentos o caracteres especiales.
  
