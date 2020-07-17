---
## How To 
1. git clone https://github.com/rhivent/typescript-expressjs.git
2. yarn or npm install
3. Open 2 terminals
4. Terminal 1 yarn ts to compile the TypeScript into JS File (watch mode).
5. Terminal 2 yarn dev to run the ap
## Architecture
- API layer : route, controller 
- Service layer : bagian logic dan apa yang harus dilakukan
- Repository layer : bagian kepentingan utk memanggil model
- Data access layer : models
- Database

## Configuration koneksi database data melalui .sequelizerc
```sh
./node_modules/.bin/sequelize-cli init
```
Cari folder src/config/database.js ubah dengan .env configuration
Membuat model awal
```sh
./node_modules/.bin/sequelize-cli model:generate --name user --attributes username:string,password:string --underscored
```

Migration ke db 
```sh
./node_modules/.bin/sequelize-cli db:migrate
```
