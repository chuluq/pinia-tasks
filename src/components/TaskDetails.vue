<script setup lang="ts">
import type { Task } from '@/stores/TaskStore';

defineProps<{ task: Task }>();
</script>

<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons">delete</i>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>
