import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';
import { AppController } from './app/app.controller';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'mongodb',
  //     url: 'mongodb://localhost:27017/todo-app',
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     autoLoadEntities: true,
  //   }),
  //   NotesModule,
  // ],
  controllers: [AppController],
})
export class AppModule {}
