import React, { useState } from 'react';
import { Task } from '../../types';

type CreateTaskFormProps = {
  onSubmit: (task: Omit<Task, 'id' | 'createdDate' | 'completionDate'>) => void;
  onCancel: () => void;
};

export const CreateTaskForm = ({ onSubmit, onCancel }: CreateTaskFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignedTo: '',
    status: 'NOT_STARTED' as Task['status']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      createdBy: 'currentUserId' // TODO: Get from auth context
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Task Title
        </label>
        <input
          id="title"
          type="text"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">
          Assign To
        </label>
        <select
          id="assignedTo"
          className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.assignedTo}
          onChange={(e) => setFormData(prev => ({ ...prev, assignedTo: e.target.value }))}
        >
          <option value="">Select family member</option>
          <option value="member1">John Doe</option>
          <option value="member2">Jane Doe</option>
        </select>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 btn btn-primary"
        >
          Create Task
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 btn btn-secondary"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};