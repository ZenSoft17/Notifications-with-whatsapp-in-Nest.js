import { Module } from '@nestjs/common';
import { DateService } from './services/date.service';

@Module({
  providers: [DateService]
})
export class GlobalModule {}
