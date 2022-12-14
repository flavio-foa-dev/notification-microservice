## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


Nest is [MIT licensed](LICENSE).

### Prisma
bank connection

npm instal prisma -D
npm install @prisma/client

### SQLite
npx prisma init --datasource-provider SQLite
 rodar migration: npx prisma migrate dev

 interface prisma para visualizar DB
 npx prisma studio