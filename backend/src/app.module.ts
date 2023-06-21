import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/hanabi'),
    MongooseModule.forFeature([{ name: 'user', schema: userSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
