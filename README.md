# Parcial 1 Metodología de Sistemas - Riva

## Para correr el proyecto


### Crear variables de entorno

En la carpeta **server** crear un archivo **.env** y completar las variables, hay un ejemplo en la misma carpeta en el archivo **.env_default**

Variables a completar:

```
PORT=3001
DB_USER=root
DB_PASSWORD=
DB_HOST=127.0.0.1
DB_DATABASE=movies_db
```
### Importar base de datos

En la carpeta server hay una db con datos ya cargados, para importarla en mysql:
```
mysql -u root -p
create database movies_db;
use movies_db;
source PATH_TO_DB/movies_db.sql
```

### Ejecutar API
```
cd server
npm run test
```

### Ejecutar App react
```
cd client
npm start
```