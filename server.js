const bcrypt  = require ('bcryptjs'); 
const db = require('./app/models')
const userController = require('./app/controllers/user.controller')
const bootcampController = require('./app/controllers/bootcamp.controller')

const run = async () => {

  // Crear un Usuario
  const user1 = await userController.createUser({
    firstName: 'Mateo',
    lastName: 'Díaz',
    email: 'mateo.diaz@correo.com',
    password: bcrypt.hashSync('mateo123456')
  })

  const user2 = await userController.createUser({
    firstName: 'Santiago',
    lastName: 'Mejias',
    email: 'santiago.mejias@correo.com',
    password: bcrypt.hashSync('santiago123456')
  })

  const user3 = await userController.createUser({
    firstName: 'Lucas',
    lastName: 'Rojas',
    email: 'lucas.rojas@correo.com',
    password: bcrypt.hashSync('lucas123456',)
  })

  const user4 = await userController.createUser({
    firstName: 'Facundo',
    lastName: 'Fernández',
    email: 'facundo.fernandez@correo.com',
    password: bcrypt.hashSync('facundo123456',)
  })

  // Crear un Bootcamp
  const bootcamp1 = await bootcampController.createBootcamp({
    title: 'Introduciendo El Bootcamp De React',
    cue: 10,
    description: "React es la librería más usada en JavaScript para el desarrollo de interfaces",
  })

  const bootcamp2 = await bootcampController.createBootcamp({
    title: 'Bootcamp Desarrollo Web Full Stack',
    cue: 12,
    description: "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares como JavaScript, nodeJS, Angular, MongoDB, ExpressJS",
  })

  const bootcamp3 = await bootcampController.createBootcamp({
    title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning',
    cue: 12,
    description: "Domina Data Science todo el ecosistema de lenguajes y herramientas de Big Data e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning",
  })

  // Agregando usuarios a los Bootcamp
  await bootcampController.addUser(bootcamp1.id, user1.id);
  await bootcampController.addUser(bootcamp1.id, user2.id);
  await bootcampController.addUser(bootcamp2.id, user1.id);
  await bootcampController.addUser(bootcamp3.id, user1.id);
  await bootcampController.addUser(bootcamp3.id, user2.id);
  await bootcampController.addUser(bootcamp3.id, user3.id);
  await bootcampController.addUser(bootcamp3.id, user4.id);


  // Consultando el bootcamp(id) incluyendo los usuarios
  console.log("1. Consultando el Bootcamp por id, incluyendo los usuarios.")  
  const _bootcamp1 = await bootcampController.findById(bootcamp1.id);
  console.log(" Bootcamp  ", JSON.stringify(_bootcamp1, null, 2));

  // Consultado  todos los bootcamp
  console.log("2. Listar todos los Bootcamp con sus usuarios.")
  const bootcamps = await bootcampController.findAll();
  console.log(" Bootcamps: ", JSON.stringify(bootcamps, null, 2));

  // Consultado los usuarios (id) incluyendo los bootcamp
  console.log("3. Consultado los usuarios (id) incluyendo los bootcamp")  
  const _user = await userController.findUserById(user1.id);
  console.log(" user1: ", JSON.stringify(_user, null, 2));

  // Listar todos los usuarios con sus bootcamp
  console.log("4. Listar los usuarios con sus Bootcamp")  
  const users = await userController.findAll();
  console.log(">> usuarios: ", JSON.stringify(users, null, 2));

  // Actualización de usuario por id
  console.log("5. Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro Sánchez.")
  const user = await userController.updateUserById(user1.id, "Pedro", "Sánchez");
  const _user1 = await userController.findUserById(user1.id);
  console.log(" user1: ", JSON.stringify(_user1, null, 2));

  //Eliminar un usuario por id
  console.log("6. Eliminar un usuario por id; por ejemplo: el usuario con id=1")
  const _duser1 = await userController.deleteUserById(user1.id);
  console.log(" duser1: ", JSON.stringify(_duser1, null, 2));
}

//db.sequelize.sync()
db.sequelize.sync({
  force: true
}).then(() => {
  console.log('Eliminando y resincronizando la base de datos.')
  run()
})