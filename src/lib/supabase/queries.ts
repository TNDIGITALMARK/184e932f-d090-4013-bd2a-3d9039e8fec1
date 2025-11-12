import { supabase, TENANT_ID, PROJECT_ID } from './client';
import type { Project, Task, UserProfile } from './types';

// Projects Queries
export async function getProjects() {
  const { data, error } = await supabase
    .from('mvp_projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Project[];
}

export async function getProjectById(id: string) {
  const { data, error } = await supabase
    .from('mvp_projects')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as Project;
}

export async function createProject(project: Partial<Project>) {
  const { data, error } = await supabase
    .from('mvp_projects')
    .insert({
      tenantid: TENANT_ID,
      projectid: PROJECT_ID,
      ...project,
    })
    .select()
    .single();

  if (error) throw error;
  return data as Project;
}

export async function updateProject(id: string, updates: Partial<Project>) {
  const { data, error } = await supabase
    .from('mvp_projects')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as Project;
}

export async function deleteProject(id: string) {
  const { error } = await supabase
    .from('mvp_projects')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// Tasks Queries
export async function getTasks(projectRef?: string) {
  let query = supabase
    .from('mvp_tasks')
    .select('*')
    .order('created_at', { ascending: false });

  if (projectRef) {
    query = query.eq('project_ref', projectRef);
  }

  const { data, error } = await query;

  if (error) throw error;
  return data as Task[];
}

export async function getTaskById(id: string) {
  const { data, error } = await supabase
    .from('mvp_tasks')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as Task;
}

export async function createTask(task: Partial<Task>) {
  const { data, error } = await supabase
    .from('mvp_tasks')
    .insert({
      tenantid: TENANT_ID,
      projectid: PROJECT_ID,
      ...task,
    })
    .select()
    .single();

  if (error) throw error;
  return data as Task;
}

export async function updateTask(id: string, updates: Partial<Task>) {
  const { data, error } = await supabase
    .from('mvp_tasks')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data as Task;
}

export async function deleteTask(id: string) {
  const { error } = await supabase
    .from('mvp_tasks')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// User Profile Queries
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('mvp_user_profiles')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) throw error;
  return data as UserProfile;
}

export async function createUserProfile(profile: Partial<UserProfile>) {
  const { data, error } = await supabase
    .from('mvp_user_profiles')
    .insert({
      tenantid: TENANT_ID,
      projectid: PROJECT_ID,
      ...profile,
    })
    .select()
    .single();

  if (error) throw error;
  return data as UserProfile;
}

export async function updateUserProfile(userId: string, updates: Partial<UserProfile>) {
  const { data, error } = await supabase
    .from('mvp_user_profiles')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('user_id', userId)
    .select()
    .single();

  if (error) throw error;
  return data as UserProfile;
}
