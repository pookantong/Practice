import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})
export class Todo{
    @Prop()
    id: string

    @Prop()
    title: string

    @Prop()
    status: "Todo"|"done"|"in progress"
}

export const TodoSchema = SchemaFactory.createForClass(Todo)