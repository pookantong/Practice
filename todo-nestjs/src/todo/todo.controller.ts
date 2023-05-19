import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { Todo } from './schemas/todo.schema';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService){}

    @Get()
    async getAllTodo(): Promise<Todo[]>{
        return this.todoService.findAll()   
    }

    @Post()
    async createTodo(
        @Body()
        todo
    ): Promise<Todo>{
        return this.todoService.createTodo(todo)
    }

    @Get(':id')
    async getTodoById(
        @Param('id')
        id: string
    ): Promise<Todo>{
        return this.todoService.findById(id)   
    }
}
