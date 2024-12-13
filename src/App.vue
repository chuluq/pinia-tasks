<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { useTaskStore } from './stores/TaskStore.ts';

const taskStore = useTaskStore();
taskStore.getTasks();

const { tasks, isLoading, favs, totalCount, favCount } = storeToRefs(taskStore);

const filter = ref<'all' | 'favs'>('all');
</script>

<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia-logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <div class="loading" v-if="isLoading">Loading tasks...</div>

    <div v-if="filter === 'all'" class="task-list">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div v-if="filter === 'favs'" class="task-list">
      <p>You have {{ favCount }} tasks left to do</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!-- <button @click="taskStore.$reset">Reset</button> -->
  </main>
</template>
