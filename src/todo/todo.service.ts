import { Injectable } from '@nestjs/common';
import { TodoInterface } from './types/TodoInterface';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>

    findAll(): Promise<TodoInterface[]> {
        return this.todoRepository.find()
    }

    findOne(id: number): Promise<TodoInterface> {
        return this.todoRepository.findOneBy({ id })
    }

    create(todo: Omit<TodoInterface, 'id'>): Promise<TodoInterface> {
        const newTodo = this.todoRepository.create(todo)
        return this.todoRepository.save(newTodo)
    }

    async delete(id: number): Promise<TodoInterface[]> {
        await this.todoRepository.delete(id)
        return this.todoRepository.find()
    }
}
