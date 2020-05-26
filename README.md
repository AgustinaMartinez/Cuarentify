## `Introducción`

Como usuario, quiero poder buscar un artista en spotify y ver sus álbumes y canciones. Además, quiero poder marcar mis canciones favoritas. (opcional)

### `Objetivos`

1. Crear una aplicación web que pueda ser accedida desde un teléfono y desde una máquina desktop.

2. Obtener los resultados que coincidan con el texto ingresado, usando la API de búsqueda de spotify.

3. Poder marcar mis canciones favoritas y que al refrescar el navegador, sigan apareciendo como favoritas. (opcional)

### `Requisitos Funcionales`

### `Necesarios`

1. Como usuario, quiero poder buscar un artista en un formulario y ver el resultado de esa búsqueda.

2. Como usuario, quiero poder seleccionar entre los artistas que aparecieron en el resultado y luego ver un listado de sus álbumes.

3. Como usuario, quiero poder clickear en uno de sus álbumes y ver el nombre del álbum, una foto del álbum y el listado de canciones.

4. Como usuario quiero poder realizar una nueva búsqueda desde cualquier punto de mi aplicación.

5. Como usuario debo poder regresar a la página principal de mi aplicación en cualquier punto del flow.

6. Como usuario quiero poder escuchar un fragmento de cada tema.


### Ingresá a este link para crear el token: 

`https://developer.spotify.com/console/get-several-albums/?ids=&market=`

1. Hacé clic en `GET TOKEN` y tildá todas las opciones.
2. Hacé clic en `REQUEST TOKEN`.
3. Al costado, copiá el token generado sin incluir el 'Bearer'.
4. Pegalo reemplazando el token anterior en la línea 2 en `src` > `config` > `config.js`.
5. Ya podés hacer consumir de la API de Spotify.

### `Errores:`

Si escribís mal al artista, apretás el botón "search" sin haber escrito nada o si se venció el token, saltará el error `Hubo un error para buscar el artista, intentá nuevamente`.