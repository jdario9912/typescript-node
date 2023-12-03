## Descripcion

Aplicacion desarrollada en Node con Typescript, utilizando Express.

El objeto es un piloto de avion que quiere registrar datos de los vuelos realizados.

Debe poder obtener todos los registros o uno solo.

Requiere:

* date (string)
* weather (string): "soleado" | "nublado" | "ventoso" | "lluvioso" | "tormentoso"
* visibility (string): "optima" | "buena" | "mala" | "poca"
* comment (string)

Ejemplo:

```json
{
  "date": "2024-10-04",
  "weather": "soleado",
  "visibility": "optima",
  "comment": "un vuelo genial"
}

```

### Endpoints

#### POST

http://localhost:3100/api/vuelos


#### GET

http://localhost:3100/api/vuelos

http://localhost:3100/api/vuelos/:id

## Objetivo

1. Desarrollar una aplicaciòn que utilice tipado de datos. Con este fin se utilizò Typescript.

2. Integrar otras tecnologìas como eslint, MongoDb, Docker y Jest.

3. Implementar pruebas unitarias.

## Por completar

* [x] Crear repositorio en GitHub.
* [x] Tipado de datos.
* [x] Activar eslint.
* [x] Incorporar una base de datos desde Docker.
* [ ] Conectar e implementar MongoDb.
* [ ] Automatizar test con Jest.

## Como usarla

### Requerimientos previos

1. Tener Node instalado. Puedes ver como instalarlo [aqui](https://gist.github.com/jdario9912/af34af94964c70b85cbfb1f84210915b "instalar Node").

2. Tener Git instalado. Puedes ver como instalarlo [aqui](https://gist.github.com/jdario9912/4e7b3893f95094e783a3ff6ee0402176 "instalar Git").

3. Tener Docker instalado. Puedes ver como instalarlo [aqui](https://gist.github.com/jdario9912/ff10512f7925a29023cd900f5ca09a11 "instalar Docker").

### Instalacion

1. Clonar el repositorio.

2. Ejecutar `npm i` para instalar dependencias.

3. Ejecutar `npm` para ver los comandos disponibles.

### Extra

Por defecto la aplicaciòn se ejecuta en el puerto 3100, pero se puede agregar un archivo ".env" en la raiz del proyecto para asignar otro.

`PORT=algun puerto`
