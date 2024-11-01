import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { TaskCard } from '../components/TaskCard';
import { CreateTaskForm } from '../components/tasks/CreateTaskForm';
import { Task } from '../types';

const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Clean the garage',
    description: 'Remove old items and organize tools',
    status: 'IN_PROGRESS',
    createdBy: 'user1',
    assignedTo: 'user2',
    createdDate: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Grocery shopping',
    description: 'Buy items for the week',
    status: 'NOT_STARTED',
    createdBy: 'user1',
    assignedTo: 'user3',
    createdDate: new Date().toISOString(),
  },
];

export const Dashboard = () => {
  const [tasks, setTasks] = useState(MOCK_TASKS);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleStatusChange = (taskId: string, status: Task['status']) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, status } : task
    ));
  };

  const handleCreateTask = (newTask: Omit<Task, 'id' | 'createdDate' | 'completionDate'>) => {
    const task: Task = {
      ...newTask,
      id: Date.now().toString(),
      createdDate: new Date().toISOString(),
    };
    setTasks(prev => [...prev, task]);
    setShowCreateForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your family's tasks</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus size={20} />
          New Task
        </button>
      </div>

      {showCreateForm ? (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Create New Task</h2>
          <CreateTaskForm
            onSubmit={handleCreateTask}
            onCancel={() => setShowCreateForm(false)}
          />
        </div>
      ) : (
        <div className="grid gap-6">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};