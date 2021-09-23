import { Module } from '@nestjs/common';
import { SampleResolver } from './sample.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [SampleResolver],
})
export class SampleModule {}
