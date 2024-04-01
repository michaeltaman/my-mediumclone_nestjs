import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone_nestjs',
  password: '123',
  database: 'mediumclone_nestjs',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  // You may need to add extra options here, like `entities`, `synchronize`, etc.
};

export default config;
