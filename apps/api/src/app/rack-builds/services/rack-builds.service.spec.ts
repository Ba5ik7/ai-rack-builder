import { Test, TestingModule } from '@nestjs/testing';
import { RackBuildsService } from './rack-builds.service';

describe('RackBuildsService', () => {
  let service: RackBuildsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RackBuildsService],
    }).compile();

    service = module.get<RackBuildsService>(RackBuildsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
