import { Test, TestingModule } from '@nestjs/testing';
import { RackBuildsController } from './rack-builds.controller';

describe('RackBuildsController', () => {
  let controller: RackBuildsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RackBuildsController],
    }).compile();

    controller = module.get<RackBuildsController>(RackBuildsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
