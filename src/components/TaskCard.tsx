import React from 'react';
import { Clock, User } from 'lucide-react';
import { Task } from '../types';

const statusColors = {
  'NOT_STARTED': 'bg-yellow-100 text-yellow-800',
  'IN_PROGRESS': 'bg-blue-100 text-blue-800',
  'COMPLETED': 'bg-green-100 text-green-800',
};

type TaskCardProps = {
  task: Task;
  onStatusChange: (taskId: string, status: Task['status']) => void;
};

export const TaskCard = ({ task, onStatusChange }: TaskCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value as Task['status'])}
          className={`${statusColors[task.status]} px-3 py-1 rounded-full text-sm font-medium border-0`}
        >
          <option value="NOT_STARTED">Not Started</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>
      
      <p className="text-gray-600 mb-4">{task.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <User size={16} />
          <span>Assigned to John Doe</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{new Date(task.createdDate).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};