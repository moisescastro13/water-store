import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database.service';

@Module({
    imports: [...DatabaseProvider],
    exports: [...DatabaseProvider]
})
export class DatabaseModule {}
