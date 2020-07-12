---

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