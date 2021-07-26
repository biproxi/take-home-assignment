<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Status
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="todo in todos" :key="todo.ID">
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-gray-900
                  "
                >
                  <input type="text" v-model="todo.Title" />
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-gray-900
                  "
                >
                  <select v-model="todo.Status">
                    <option value="Inactive">Inactive</option>
                    <option value="Active">Active</option>
                  </select>
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-medium
                  "
                >
                  <a
                    href="#"
                    class="text-red-600 hover:text-red-900 mr-2"
                    @click.prevent="deleteTodo(todo.ID)"
                    >Delete</a
                  >
                  <a
                    href="#"
                    class="text-indigo-600 hover:text-indigo-900"
                    @click.prevent="updateTodo(todo)"
                    >Save</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoType from "../types/todo";

@Options({
  props: {
    todos: Array,
  },
})
export default class Todos extends Vue {
  deleteTodo(id: number): void {
    fetch(`http://localhost:3000/todos/${id}`, { method: "delete" }).then(
      () => {
        this.$emit("deleted");
      }
    );
  }
  updateTodo(todo: TodoType): void {
    fetch(`http://localhost:3000/todos/${todo.ID}`, {
      method: "put",
      body: JSON.stringify(todo),
    });
  }
}
</script>
