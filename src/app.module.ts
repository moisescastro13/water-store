import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/config.module';
import { ConfigService } from '@nestjs/config';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService){
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
