import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/todo-app',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoLoadEntities: true,
    }),
    NotesModule,
  ],
})
export class AppModule {}
