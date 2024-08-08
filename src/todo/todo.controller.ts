import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Put(':id')
    async update(@Param('id') id: string, @Body() todo: Partial<TodoInterface>): Promise<TodoInterface>{
        return await this.todoService.update(+id, todo)
    }


    @Delete(':id')
    delete(@Param('id') id: string): Promise<TodoInterface[]> {
        return this.todoService.delete(+id)
    }
}
