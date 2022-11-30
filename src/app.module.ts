import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getMongoConfig } from './config/mongo.config'
import { CoursesModule } from './courses/courses.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    CoursesModule,
    ProductsModule,
    // ConfigModule.forRoot(),
    // TypegooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: getMongoConfig
    // })
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/studio')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
