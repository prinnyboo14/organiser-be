import { Module } from '@nestjs/common';
import { ApiModule } from './API/ApiModule';
import { DomainModule } from './Domain/DomainModule';
import { InfrastructureModule } from './Infrastructure/InfrastructureModule';
import { DatabaseModule } from './Infrastructure/Database/DatabaseModule';

@Module({
  imports: [DatabaseModule, ApiModule, DomainModule, InfrastructureModule],
})
export class AppModule {}
