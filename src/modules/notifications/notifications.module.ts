import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CalcsService } from './calcs.service';

@Module({
  providers: [NotificationsService, CalcsService]
})
export class NotificationsModule {}
