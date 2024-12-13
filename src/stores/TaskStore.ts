import { defineStore } from 'pinia';

export interface Task {
  id: number;
  title: string;
  isFav: boolean;
}

export const useTaskStore = defineStore('taskStore', {
  state: (): { tasks: Task[]; isLoading: boolean } => ({
    tasks: [],
    isLoading: false,
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
  actions: {
    async getTasks() {
      try {
        this.isLoading = true;
        const res = await fetch('http://localhost:3000/tasks');
        const data = await res.json();
        this.tasks = data;
      } catch (error) {
        console.error('error get tasks', error);
      } finally {
        this.isLoading = false;
      }
    },
    async addTask(task: Task) {
      this.tasks.push(task);

      try {
        await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          body: JSON.stringify(this.tasks),
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.error('error create task', error);
      }
    },
    async deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);

      try {
        await fetch('http://localhost:3000/tasks/' + id, {
          method: 'DELETE',
        });
      } catch (error) {
        console.error('error delete task', error);
      }
    },
    async toggleFav(id: number) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.isFav = !task.isFav;
      }

      try {
        await fetch('http://localhost:3000/tasks/' + id, {
          method: 'PUT',
          body: JSON.stringify(task),
        });
      } catch (error) {
        console.error('error create tasks', error);
      }
    },
  },
});
