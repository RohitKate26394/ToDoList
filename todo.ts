class Task {
    name: string;
    description: string;
    dueDate: Date;
    status: string;
  
    constructor(name: string, description: string, dueDate: Date) {
      this.name = name;
      this.description = description;
      this.dueDate = dueDate;
      this.status = 'not started';
    }
  
    setStatus(status: string) {
      this.status = status;
    }
  }
  
  class TodoList {
    name: string;
    description: string;
    tasks: Task[];
  
    constructor(name: string, description: string) {
      this.name = name;
      this.description = description;
      this.tasks = [];
    }
  
    addTask(task: Task) {
      this.tasks.push(task);
    }
  
    deleteTask(task: Task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    }
  
    editTask(task: Task, newName: string, newDescription: string, newDueDate: Date) {
      task.name = newName;
      task.description = newDescription;
      task.dueDate = newDueDate;
    }
  }
  
  export { TodoList, Task };
  