import { Module } from '@nestjs/common';
import { UseCasesModule } from './UseCases/UseCasesModule';

@Module({
  imports: [UseCasesModule],
  exports: [UseCasesModule],
})
export class DomainModule {}
