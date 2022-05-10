const request = require('supertest');

const fakeBooks = [
  {
    "email": 'maday@email.com',
    "password": 'Total1#'
  }
]

const email = fakeBooks[0].email;
const password = fakeBooks[0].password;
const emailValido = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i;
describe('validar correo y contraseña',() => {
  test('Estructura del correo', () => {
    expect(email).toMatch(emailValido)
  })
  test('Contraseña segura: al menos una mayuscula, una minuscula, un número, un caracter especial y al menos de 8 caracteres ej Maday#987', () => {
    expect(password).toMatch(passwordStrong)
  })
});


