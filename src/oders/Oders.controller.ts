import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { OderDto } from 'src/dto/oders.dto';
import { OdersService } from './Oders.service';

@Controller('oders')
export class OdersControlle {
  constructor(private readonly service: OdersService) {}

  @Post()
  Add(@Body() body: OderDto) {
    return this.service.Add(body);
  }

  @Get()
  FindAll() {
    return this.service.FindAll();
  }

  @Get('/:id')
  FindOne(@Param('id') id: string) {
    return this.service.FindOne(id);
  }

  @Put('/:id')
  Update(@Param('id') id: string, @Body() body: OderDto) {
    return this.service.Update(id, body);
  }

  @Delete('/:id')
  Delete(@Param('id') id: string) {
    return this.service.Delete(id);
  }
}
