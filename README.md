# vue-security

Projeto exemplo em Vue.js que interage com o projeto **spring-rest-security**. 
Após o login, um token JWT é armazenado na **_store_**. Por meio de um **_interceptor_** do **Axios**, toda requisição passa a utilizar o token JWT para autenticação.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
