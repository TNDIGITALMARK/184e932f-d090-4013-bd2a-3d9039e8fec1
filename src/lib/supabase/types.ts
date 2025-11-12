// Database Types for MVP

export interface Project {
  id: string;
  tenantid: string;
  projectid: string;
  name: string;
  description: string | null;
  status: 'active' | 'completed' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface Task {
  id: string;
  tenantid: string;
  projectid: string;
  project_ref: string | null;
  title: string;
  description: string | null;
  status: 'pending' | 'in_progress' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  due_date: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  id: string;
  tenantid: string;
  projectid: string;
  user_id: string;
  full_name: string | null;
  email: string;
  avatar_url: string | null;
  bio: string | null;
  preferences: Record<string, any>;
  created_at: string;
  updated_at: string;
}
