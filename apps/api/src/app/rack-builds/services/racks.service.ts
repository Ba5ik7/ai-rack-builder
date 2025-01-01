import { Injectable } from '@nestjs/common';
import { RackDocument, TRackDocument } from '../schemas/rack.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RacksService {
  constructor(
    @InjectModel(RackDocument.name)
    private rackDocumentModel: Model<TRackDocument>
  ) {}

  async getRacks() {
    return await this.rackDocumentModel.find().exec();
  }

  async getRackById(id: string) {
    return await this.rackDocumentModel.findById(id).exec();
  }

  async createRack(data: RackDocument) {
    const newRack = new this.rackDocumentModel(data);
    return await newRack.save();
  }

  async updateRack(id: string, data: RackDocument) {
    return await this.rackDocumentModel.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async deleteRack(id: string) {
    return await this.rackDocumentModel.findByIdAndDelete(id);
  }
}
