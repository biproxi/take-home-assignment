<template>
  <div class="rounded-md shadow-sm -space-y-px">
    <div>
      <label for="title" class="sr-only">Title</label>
      <input
        name="title"
        type="text"
        class="
          appearance-none
          rounded-none
          relative
          block
          w-full
          px-3
          py-2
          border border-gray-300
          placeholder-gray-500
          text-gray-900
          rounded-md
          focus:outline-none
          focus:ring-indigo-500
          focus:border-indigo-500
          focus:z-10
          sm:text-sm
        "
        placeholder="Title"
        v-model="title"
      />
    </div>
  </div>

  <div class="mt-4">
    <button
      type="submit"
      class="
        group
        relative
        w-full
        flex
        justify-center
        py-2
        px-4
        border border-transparent
        text-sm
        font-medium
        rounded-md
        text-white
        bg-indigo-600
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
      :disabled="!title"
      :class="{ 'opacity-50 cursor-not-allowed': !title }"
      @click="createTodo"
    >
      Submit
    </button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Todos extends Vue {
  title = "";

  createTodo(): void {
    fetch("http://localhost:3000/todos", {
      method: "post",
      body: JSON.stringify({ title: this.title }),
      mode: "no-cors",
    }).then(() => {
      this.title = "";
      this.$emit("done");
    });
  }
}
</script>
