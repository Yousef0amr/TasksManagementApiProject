import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { DataSource } from 'typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
