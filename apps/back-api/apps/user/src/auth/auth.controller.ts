import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(token: string, @Body() registerDto: RegisterDto) {
    if (!token) {
      throw new BadRequestException('Token is required');
    }
    return this.authService.register(token, registerDto);
  }
}
