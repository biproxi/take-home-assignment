<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div class="py-10">
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="
            pb-5
            border-b border-gray-200
            sm:flex sm:items-center sm:justify-between
          "
        >
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            What you gonna do?
          </h1>
          <div class="mt-3 flex sm:mt-0 sm:ml-4">
            <button
              type="button"
              class="
                inline-flex
                items-center
                px-4
                py-2
                border border-gray-300
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-gray-700
                bg-white
                hover:bg-gray-50
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
              @click="showTodos = true"
              v-if="!showTodos"
            >
              Cancel
            </button>
            <button
              type="button"
              class="
                ml-3
                inline-flex
                items-center
                px-4
                py-2
                border border-transparent
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-indigo-500
              "
              @click="showTodos = false"
              v-if="showTodos"
            >
              Add New
            </button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-8 sm:px-0">
          <Todos v-if="showTodos" :todos="todos" @deleted="refresh" />
          <New v-else @done="refresh" />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import New from "./components/New.vue";
import Todos from "./components/Todos.vue";

@Options({
  components: {
    New,
    Todos,
  },
})
export default class App extends Vue {
  showTodos = true;
  todos = [];

  mounted(): void {
    this.getDemTodos();
  }

  refresh(): void {
    this.showTodos = true;
    this.getDemTodos();
  }
  getDemTodos(): void {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => (this.todos = data));
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
