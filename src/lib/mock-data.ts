// Mock data for MVP demonstration
import type { Project, Task, UserProfile } from './supabase/types';

export const mockProjects: Project[] = [
  {
    id: '1',
    tenantid: 'HozQcFa5e6Uf3BwzI61qLrcKb6r1',
    projectid: '184e932f-d090-4013-bd2a-3d9039e8fec1',
    name: 'Website Redesign',
    description: 'Complete overhaul of company website with modern design',
    status: 'active',
    created_at: '2025-01-15T10:00:00Z',
    updated_at: '2025-01-15T10:00:00Z',
  },
  {
    id: '2',
    tenantid: 'HozQcFa5e6Uf3BwzI61qLrcKb6r1',
    projectid: '184e932f-d090-4013-bd2a-3d9039e8fec1',
    name: 'Mobile App Development',
    description: 'Build native mobile application for iOS and Android',
    status: 'active',
    created_at: '2025-01-10T14:30:00Z',
    updated_at: '2025-01-10T14:30:00Z',
  },
  {
    id: '3',
    tenantid: 'HozQcFa5e6Uf3BwzI61qLrcKb6r1',
    projectid: '184e932f-d090-4013-bd2a-3d9039e8fec1',
    name: 'API Integration',
    description: 'Integrate third-party APIs for enhanced functionality',
    status: 'completed',
    created_at: '2024-12-20T09:15:00Z',
    updated_at: '2025-01-05T16:45:00Z',
  },
];

export const mockTasks: Task[] = [
  {
    id: '1',
    tenantid: 'HozQcFa5e6Uf3BwzI61qLrcKb6r1',
    projectid: '184e932f-d090-4013-bd2a-3d9039e8fec1',
    project_ref: '1',
    title: 'Design homepage mockups',
    description: 'Create high-fidelity mockups for the new homepage design',
    status: 'completed',
    priority: 'high',
    due_date: '2025-01-20T00:00:00Z',
    created_at: '2025-01-15T10:05:00Z',
    updated_at: '2025-01-18T14:30:00Z',
  },
  {
    id: '2',
    tenantid: 'HozQcFa5e6Uf3BwzI61qLrcKb6r1',
    projectid: '184e932f-d090-4013-bd2a-3d9039e8fec1',
    project_ref: '1',
    title: 'Implement responsive navigation',
    description: 'Build mobile-first navigation component with hamburger menu',
    status: 'in_progress',
    priority: 'high',
    due_date: '2025-01-25T00:00:00Z',
    created_at: '2025-01-15T10:10:00Z',
    updated_at: '2025-01-19T09:15:00Z',
  },
  {
    id: '3',
    tenantid: 'HozQcFa5e6Uf3BwzI61qLrcKb6r1',
    projectid: '184e932f-d090-4013-bd2a-3d9039e8fec1',
    project_ref: '1',
    title: 'Optimize page load speed',
    description: 'Analyze and improve Core Web Vitals metrics',
    status: 'pending',
    priority: 'medium',
    due_date: '2025-01-30T00:00:00Z',
    created_at: '2025-01-15T10:15:00Z',
    updated_at: '2025-01-15T10:15:00Z',
  },
  {
    id: '4',
    tenantid: 'HozQcFa5e6Uf3BwzI61qLrcKb6r1',
    projectid: '184e932f-d090-4013-bd2a-3d9039e8fec1',
    project_ref: '2',
    title: 'Set up React Native project',
    description: 'Initialize React Native project with TypeScript',
    status: 'completed',
    priority: 'urgent',
    due_date: '2025-01-12T00:00:00Z',
    created_at: '2025-01-10T14:35:00Z',
    updated_at: '2025-01-11T16:20:00Z',
  },
  {
    id: '5',
    tenantid: 'HozQcFa5e6Uf3BwzI61qLrcKb6r1',
    projectid: '184e932f-d090-4013-bd2a-3d9039e8fec1',
    project_ref: '2',
    title: 'Design app UI components',
    description: 'Create reusable UI component library',
    status: 'in_progress',
    priority: 'high',
    due_date: '2025-01-22T00:00:00Z',
    created_at: '2025-01-10T14:40:00Z',
    updated_at: '2025-01-17T11:45:00Z',
  },
  {
    id: '6',
    tenantid: 'HozQcFa5e6Uf3BwzI61qLrcKb6r1',
    projectid: '184e932f-d090-4013-bd2a-3d9039e8fec1',
    project_ref: '2',
    title: 'Implement authentication flow',
    description: 'Add user login and registration screens',
    status: 'pending',
    priority: 'medium',
    due_date: '2025-01-28T00:00:00Z',
    created_at: '2025-01-10T14:45:00Z',
    updated_at: '2025-01-10T14:45:00Z',
  },
];

export const mockUserProfile: UserProfile = {
  id: '1',
  tenantid: 'HozQcFa5e6Uf3BwzI61qLrcKb6r1',
  projectid: '184e932f-d090-4013-bd2a-3d9039e8fec1',
  user_id: 'user-123',
  full_name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  avatar_url: null,
  bio: 'Full-stack developer passionate about creating elegant solutions to complex problems.',
  preferences: {
    theme: 'light',
    emailNotifications: true,
    pushNotifications: false,
    language: 'en',
  },
  created_at: '2024-12-01T08:00:00Z',
  updated_at: '2025-01-10T12:30:00Z',
};

// Helper functions for mock data
export function getProjectStats() {
  return {
    total: mockProjects.length,
    active: mockProjects.filter(p => p.status === 'active').length,
    completed: mockProjects.filter(p => p.status === 'completed').length,
    archived: mockProjects.filter(p => p.status === 'archived').length,
  };
}

export function getTaskStats() {
  return {
    total: mockTasks.length,
    pending: mockTasks.filter(t => t.status === 'pending').length,
    inProgress: mockTasks.filter(t => t.status === 'in_progress').length,
    completed: mockTasks.filter(t => t.status === 'completed').length,
    high: mockTasks.filter(t => t.priority === 'high' || t.priority === 'urgent').length,
  };
}

export function getTasksByProject(projectId: string) {
  return mockTasks.filter(t => t.project_ref === projectId);
}
