import { Module } from '@nestjs/common';
import { SampleResolver } from './sample.resolver';
import { SampleService } from './sample.service';

@Module({
  imports: [],
  controllers: [],
  providers: [SampleResolver, SampleService],
})
export class SampleModule {}
