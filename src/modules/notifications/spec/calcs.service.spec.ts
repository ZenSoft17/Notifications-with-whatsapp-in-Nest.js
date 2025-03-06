import { Test, TestingModule } from '@nestjs/testing';
import { CalcsService } from './calcs.service';

describe('CalcsService', () => {
  let service: CalcsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalcsService],
    }).compile();

    service = module.get<CalcsService>(CalcsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
