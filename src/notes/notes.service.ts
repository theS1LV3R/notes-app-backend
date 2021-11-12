import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    const note = this.noteRepository.create(createNoteDto);
    await this.noteRepository.save(note);

    return note;
  }

  async findAll() {
    return await this.noteRepository.find();
  }

  async findOne(id: string) {
    return await this.findOrThrow(id);
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    const note = await this.findOrThrow(id);

    if (updateNoteDto.archived !== undefined) {
      note.archived = updateNoteDto.archived;
    }

    if (updateNoteDto.content !== undefined) {
      note.content = updateNoteDto.content;
    }

    // if ()
  }

  async remove(id: string) {
    return await this.noteRepository.delete(await this.findOrThrow(id));
  }

  private async findOrThrow(id: string) {
    const note = await this.noteRepository.findOne(id);

    if (!note) throw new NotFoundException();

    return note;
  }
}
