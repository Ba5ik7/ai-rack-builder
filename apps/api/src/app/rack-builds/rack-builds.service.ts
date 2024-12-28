import { Injectable } from '@nestjs/common';

@Injectable()
export class RackBuildsService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
