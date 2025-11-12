import Link from 'next/link';
import { mockProjects, mockTasks, getTasksByProject } from '@/lib/mock-data';
import { BarChart3, CheckCircle2, Circle, FolderOpen, MoreVertical, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
  const allProjects = mockProjects;

  const getProjectProgress = (projectId: string) => {
    const tasks = getTasksByProject(projectId);
    if (tasks.length === 0) return 0;
    const completed = tasks.filter(t => t.status === 'completed').length;
    return Math.round((completed / tasks.length) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-semibold">MVP Platform</h1>
            </div>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Dashboard
              </Link>
              <Link href="/projects" className="text-sm font-medium text-foreground hover:text-primary">
                Projects
              </Link>
              <Link href="/profile" className="text-sm font-medium text-muted-foreground hover:text-primary">
                Profile
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Projects</h2>
            <p className="text-muted-foreground">Manage and track all your projects</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            New Project
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-4 mb-6 border-b border-border">
          <button className="pb-3 px-1 border-b-2 border-primary text-sm font-medium text-foreground">
            All Projects ({allProjects.length})
          </button>
          <button className="pb-3 px-1 border-b-2 border-transparent text-sm font-medium text-muted-foreground hover:text-foreground">
            Active ({allProjects.filter(p => p.status === 'active').length})
          </button>
          <button className="pb-3 px-1 border-b-2 border-transparent text-sm font-medium text-muted-foreground hover:text-foreground">
            Completed ({allProjects.filter(p => p.status === 'completed').length})
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map(project => {
            const tasks = getTasksByProject(project.id);
            const progress = getProjectProgress(project.id);
            const completedTasks = tasks.filter(t => t.status === 'completed').length;

            return (
              <Card key={project.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FolderOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <Badge
                          variant={project.status === 'active' ? 'default' : project.status === 'completed' ? 'secondary' : 'outline'}
                          className="mt-2"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardDescription className="mt-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  {/* Task Stats */}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">
                        {completedTasks}/{tasks.length} tasks
                      </span>
                    </div>
                    {tasks.filter(t => t.priority === 'high' || t.priority === 'urgent').length > 0 && (
                      <div className="flex items-center gap-1.5">
                        <Circle className="w-2 h-2 fill-warning text-warning" />
                        <span className="text-muted-foreground">
                          {tasks.filter(t => t.priority === 'high' || t.priority === 'urgent').length} high priority
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      Add Task
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {allProjects.length === 0 && (
          <Card className="mt-6">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <FolderOpen className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
              <p className="text-muted-foreground mb-6 text-center max-w-md">
                Get started by creating your first project and start tracking your tasks
              </p>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Create Your First Project
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Task List Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
            <CardDescription>Latest tasks across all projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {mockTasks.slice(0, 5).map(task => {
                const project = allProjects.find(p => p.id === task.project_ref);
                return (
                  <div key={task.id} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent transition-colors">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      task.priority === 'urgent' ? 'bg-destructive' :
                      task.priority === 'high' ? 'bg-warning' :
                      task.priority === 'medium' ? 'bg-primary' :
                      'bg-muted-foreground'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-sm truncate">{task.title}</h4>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{project?.name}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {task.status.replace('_', ' ')}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {task.priority} priority
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
