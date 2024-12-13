<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStore';
import { ref } from 'vue';

const taskStore = useTaskStore();

const newTask = ref('');

const handleAddTask = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      id: Date.now() + Math.random(),
      title: newTask.value,
      isFav: false,
    });

    newTask.value = '';
  }
};
</script>

<template>
  <form @submit.prevent="handleAddTask">
    <input type="text" name="newTask" placeholder="I need to..." v-model="newTask" />
    <button type="submit">Add</button>
  </form>
</template>
