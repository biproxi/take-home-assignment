import {ITodo} from "../types/todoInterface"
import { Schema, model } from 'mongoose'

/**
 * Creates new mongo scheme
 */
const todoSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        lastUpdatedAt: {
            type: Date,
            default: Date.now
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

// export the model
export default model<ITodo>("Todo", todoSchema);