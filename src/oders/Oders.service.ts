import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {OderDto } from 'src/dto/oders.dto';
import { Oder,OderDocument } from 'src/models/oders.models';
import { faker } from '@faker-js/faker';

@Injectable()
export class OdersService {
  constructor(@InjectModel(Oder.name) private OdersModel: Model<OderDocument>) {}
  Add(body: OderDto) {
    return this.OdersModel.create(body);
  }

  FindAll() {
    return this.OdersModel.find();
  }

  FindOne(id: string) {
    return this.OdersModel.findOne({ _id: id });
  }

  Update(id: string, body: OderDto) {
    return this.OdersModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  Delete(id: string) {
    return this.OdersModel.remove({ _id: id });
  }
}
