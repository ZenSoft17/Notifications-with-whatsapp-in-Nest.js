import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsEmailService } from './notifications.email.service';

describe('NotificationsEmailService', () => {
  let service: NotificationsEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationsEmailService],
    }).compile();

    service = module.get<NotificationsEmailService>(NotificationsEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
