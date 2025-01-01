import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BuildDocument, TBuildDocument } from '../schemas/build.schema';
import { Model } from 'mongoose';

@Injectable()
export class RackBuildsService {
  constructor(
    @InjectModel(BuildDocument.name)
    private buildDocumentModel: Model<TBuildDocument>
  ) {}

  async createBuild(data: BuildDocument) {
    const newBuild = new this.buildDocumentModel(data);
    return await newBuild.save();
  }

  async getBuilds() {
    return await this.buildDocumentModel.find().exec();
  }

  async getBuildById(id: string) {
    return await this.buildDocumentModel.findById(id).exec();
  }

  async updateBuild(id: string, data: BuildDocument) {
    return await this.buildDocumentModel.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async deleteBuild(id: string) {
    return await this.buildDocumentModel.findByIdAndDelete(id);
  }
}
