<script setup lang="ts">
import { useTaskStore, type Task } from '@/stores/TaskStore';

defineProps<{ task: Task }>();

const taskStore = useTaskStore();
</script>

<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i @click="taskStore.deleteTask(task.id)" class="material-icons">delete</i>
      <i
        @click="taskStore.toggleFav(task.id)"
        class="material-icons"
        :class="{ active: task.isFav }"
        >favorite</i
      >
    </div>
  </div>
</template>
