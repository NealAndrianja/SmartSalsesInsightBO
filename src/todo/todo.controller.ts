import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoInterface } from './types/TodoInterface';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){}

    @Get()
    findAll(): Promise<TodoInterface[]> {
        return this.todoService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<TodoInterface> {
        return this.todoService.findOne(+id)
    }

    @Post()
    create(@Body() todo: Omit<TodoInterface, 'id'>): Promise<TodoInterface> {
        return this.todoService.create(todo)
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<TodoInterface[]> {
        return this.todoService.delete(+id)
    }
}
