import { Module } from '@nestjs/common';
import { UserController } from './strategy/user/user.controller';
import { UserService } from './strategy/user/user.service';
import { GoogleStrategy } from './strategy/google.strategy';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, GoogleStrategy],
})
export class AppModule {}
