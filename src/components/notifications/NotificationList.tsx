import React from 'react';
import { Bell } from 'lucide-react';
import { Notification } from '../../types';

type NotificationListProps = {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
};

export const NotificationList = ({ notifications, onMarkAsRead }: NotificationListProps) => {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex items-start gap-4 p-4 rounded-lg ${
            notification.status === 'READ' ? 'bg-gray-50' : 'bg-white'
          } shadow-sm`}
        >
          <Bell
            size={20}
            className={notification.status === 'READ' ? 'text-gray-400' : 'text-indigo-500'}
          />
          <div className="flex-1">
            <p className="text-gray-900">{notification.message}</p>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(notification.timestamp).toLocaleString()}
            </p>
          </div>
          {notification.status === 'SENT' && (
            <button
              onClick={() => onMarkAsRead(notification.id)}
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              Mark as read
            </button>
          )}
        </div>
      ))}
    </div>
  );
};