interface task {
    id: number,
    title: string,
    completed: boolean,
    description?: string
}
interface user{
    id: number,
    name: string,
    userName: string
}
interface idInput{
    input: {id: number}
}
interface taskUpdateInput {
    input: {
        id: number,
        title?: string,
        completed?: boolean,
        description?: string
    }
}

interface loginInput {
    input: {
        userName: string,
        password: string
    }
}

interface queryInput {
    userID: number
}

interface newUserInput {
    input: {
        name: string,
        userName: string,
        password: string
    }
}
interface newTaskInput {
    input: {
        title: string,
        userID: number,
        description?: string,
    }
}