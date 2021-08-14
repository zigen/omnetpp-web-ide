import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { LocalAuthGuard } from './local-auth.guards';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [
    AuthService,
    UsersService,
    PrismaService,
    LocalStrategy,
    LocalAuthGuard,
  ],
})
export class AuthModule {}
