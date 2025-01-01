import { Injectable } from '@nestjs/common';
import {
  RackComponentDocument,
  TRackComponentDocument,
} from '../schemas/rack-components.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RackComponentsService {
  constructor(
    @InjectModel(RackComponentDocument.name)
    private rackComponentDocumentModel: Model<TRackComponentDocument>
  ) {}

  async createRackComponent(data: RackComponentDocument) {
    const newRackComponent = new this.rackComponentDocumentModel(data);
    return await newRackComponent.save();
  }

  async getRackComponents() {
    return await this.rackComponentDocumentModel.find().exec();
  }

  async getRackComponentById(id: string) {
    return await this.rackComponentDocumentModel.findById(id).exec();
  }

  async updateRackComponent(id: string, data: RackComponentDocument) {
    return await this.rackComponentDocumentModel.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async deleteRackComponent(id: string) {
    return await this.rackComponentDocumentModel.findByIdAndDelete(id);
  }
}
