import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Configuration } from "src/config/config.keys";
import { ConfigurationModule } from "src/config/config.module";
import { DataSourceOptions } from "typeorm";

export const DatabaseProvider = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigurationModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        ssl: false,
        type: 'postgres',
        host: config.get(Configuration.HOST),
        username: config.get(Configuration.USERNAME),
        password: config.get(Configuration.PASSWORD),
        port: Number(config.get(Configuration.DBPORT)),
        synchronize: false,
        entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*.entity{.ts,.js}'],
      } as DataSourceOptions;
    },
    })
]