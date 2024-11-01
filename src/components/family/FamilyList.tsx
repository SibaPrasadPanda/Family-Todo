import React from 'react';
import { User as UserIcon, Crown } from 'lucide-react';
import { User } from '../../types';

type FamilyListProps = {
  members: User[];
  onRemoveMember?: (id: string) => void;
};

export const FamilyList = ({ members, onRemoveMember }: FamilyListProps) => {
  return (
    <div className="space-y-4">
      {members.map((member) => (
        <div
          key={member.id}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                {member.name}
                {member.role === 'FAMILY_HEAD' && (
                  <Crown size={16} className="text-yellow-500" />
                )}
              </h3>
              <p className="text-sm text-gray-500">{member.email}</p>
            </div>
          </div>
          
          {member.role !== 'FAMILY_HEAD' && onRemoveMember && (
            <button
              onClick={() => onRemoveMember(member.id)}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          )}
        </div>
      ))}
    </div>
  );
};