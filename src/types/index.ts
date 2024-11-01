export type User = {
  id: string;
  name: string;
  email: string;
  role: 'FAMILY_HEAD' | 'MEMBER';
  familyId: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
  createdBy: string;
  assignedTo: string;
  createdDate: string;
  completionDate?: string;
};

export type Notification = {
  id: string;
  message: string;
  recipientId: string;
  taskId: string;
  timestamp: string;
  status: 'SENT' | 'READ';
};