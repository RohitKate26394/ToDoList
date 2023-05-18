import { TodoList, Task } from './todo';

describe('TodoList', () => {
  test('should create a new TodoList with name and description', () => {
    const todoList = new TodoList('My To-Do List', 'This is my to-do list');
    expect(todoList.name).toBe('My To-Do List');
    expect(todoList.description).toBe('This is my to-do list');
    expect(todoList.tasks).toEqual([]);
  });

  test('should add a new task to the TodoList', () => {
    const todoList = new TodoList('My To-Do List', 'This is my to-do list');
    const task = new Task('Task 1', 'This is task 1', new Date());
    todoList.addTask(task);
    expect(todoList.tasks).toEqual([task]);
  });

  test('should delete a task from the TodoList', () => {
    const todoList = new TodoList('My To-Do List', 'This is my to-do list');
    const task1 = new Task('Task 1', 'This is task 1', new Date());
    const task2 = new Task('Task 2', 'This is task 2', new Date());
    const task3 = new Task('Task 3', 'This is task 3', new Date());
    todoList.addTask(task1);
    todoList.addTask(task2);
    todoList.addTask(task3);
    todoList.deleteTask(task2);
    expect(todoList.tasks).toEqual([task1, task3]);
  });

  test('should edit a task in the TodoList', () => {
    const todoList = new TodoList('My To-Do List', 'This is my to-do list');
    const task = new Task('Task 1', 'This is task 1', new Date());
    todoList.addTask(task);
    todoList.editTask(task, 'Updated Task', 'This is an updated task', new Date());
    expect(task.name).toBe('Updated Task');
    expect(task.description).toBe('This is an updated task');
  });
});

describe('Task', () => {
  test('should create a new Task with name, description, due date, and status', () => {
    const task = new Task('Task 1', 'This is task 1', new Date());
    expect(task.name).toBe('Task 1');
    expect(task.description).toBe('This is task 1');
    expect(task.dueDate).toBeInstanceOf(Date);
    expect(task.status).toBe('not started');
  });

  test('should set the status of the Task', () => {
    const task = new Task('Task 1', 'This is task 1', new Date());
    task.setStatus('completed');
    expect(task.status).toBe('completed');
  });
});
