import { Test, TestingModule } from '@nestjs/testing';
import { RackComponentsController } from './rack-components.controller';

describe('RackComponentsController', () => {
  let controller: RackComponentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RackComponentsController],
    }).compile();

    controller = module.get<RackComponentsController>(RackComponentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
