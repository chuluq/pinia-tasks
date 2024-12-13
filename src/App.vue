<script setup lang="ts">
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import { useTaskStore } from './stores/TaskStore.ts';

const taskStore = useTaskStore();

const filter = ref<'all' | 'favs'>('all');
</script>

<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia-logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <div v-if="filter === 'all'" class="task-list">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div v-if="filter === 'favs'" class="task-list">
      <p>You have {{ taskStore.favCount }} tasks left to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
