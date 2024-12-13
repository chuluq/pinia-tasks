import { defineStore } from 'pinia';

export interface Task {
  id: number;
  title: string;
  isFav: boolean;
}

export const useTaskStore = defineStore('taskStore', {
  state: (): { tasks: Task[] } => ({
    tasks: [
      { id: 1, title: 'buy some milk', isFav: false },
      { id: 2, title: 'play Gloomhaven', isFav: true },
    ],
  }),
  getters: {
    favs(): Task[] | undefined {
      return this.tasks.filter((task) => task.isFav);
    },
    favCount(): number {
      return this.tasks.reduce((prev, curr) => {
        return curr.isFav ? prev + 1 : prev;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
});
