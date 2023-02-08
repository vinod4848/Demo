import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Oder, OderSchema } from 'src/models/oders.models';
import { OdersControlle } from './Oders.controller';
import { OdersService } from './Oders.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Oder.name, schema: OderSchema }]),
  ],
  controllers: [OdersControlle],
  providers: [OdersService],
})
export class OdersModule {}
