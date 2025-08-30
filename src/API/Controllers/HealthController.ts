import { ApiOkResponse, ApiResponseProperty } from '@nestjs/swagger';
import { EnableSwagger } from '../Decorators/EnableSwagger.decorator';
import { Controller, Get } from '@nestjs/common';

class HealthResponse {
  @ApiResponseProperty({ type: 'string' })
  status: string;
}

@EnableSwagger('Health')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOkResponse({ type: HealthResponse })
  public isHealthy(): HealthResponse {
    return { status: 'OK' };
  }
}
