import { Test, TestingModule } from '@nestjs/testing';
import { RackComponentsService } from './rack-components.service';

describe('RackComponentsService', () => {
  let service: RackComponentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RackComponentsService],
    }).compile();

    service = module.get<RackComponentsService>(RackComponentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
