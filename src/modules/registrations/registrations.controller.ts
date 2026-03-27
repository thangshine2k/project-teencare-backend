import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';

@Controller('api')
export class RegistrationsController {
  constructor(private readonly service: RegistrationsService) {}

  @Post('classes/:id/register')
  register(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { student_id: number },
  ) {
    return this.service.register(body.student_id, id);
  }
}
