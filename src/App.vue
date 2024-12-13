<script setup lang="ts">
import TaskDetails from './components/TaskDetails.vue';
import { useTaskStore } from './stores/TaskStore.ts';

const taskStore = useTaskStore();
</script>

<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia-logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
