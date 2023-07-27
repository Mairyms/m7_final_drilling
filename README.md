# Final Drilling

- Para usar el proyecto debe instalar las dependencias: `npm install`

- Una vez instalandas las dependencias podrá correr el servidor: `npm run server`.

- Debe tomar en cuenta la configuracion de la base de datos:

```
module.exports = {
  HOST: 'localhost',
  USER: 'node_user',
  PASSWORD: 'node_password',
  DB: 'db_bootcamp',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
```

- Tambien puede ver los resultados de las consultas en la carpeta consultas:
  - Consultando el Bootcamp por id, incluyendo los usuarios ![1. Consultando el Bootcamp por id, incluyendo los usuarios.](consultas/consulta_1.png)
  - Listar todos los Bootcamp con sus usuarios ![2. Listar todos los Bootcamp con sus usuarios.](consultas/consulta_2.png)
  - Consultado los usuarios (id) incluyendo los bootcamp ![3. Consultado los usuarios (id) incluyendo los bootcamp.](consultas/consulta_3.png)
  - Listar los usuarios con sus Bootcamp ![4. Listar los usuarios con sus Bootcamp](consultas/consulta_4.png)
  - Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez ![5. Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez.](consultas/consulta_5.png)
  - Eliminar un usuario por id; por ejemplo: el usuario con id=1 ![6. Eliminar un usuario por id; por ejemplo: el usuario con id=1](consultas/consulta_6.png)
