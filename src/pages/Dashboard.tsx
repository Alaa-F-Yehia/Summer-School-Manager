import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Megaphone, Brain, Plus, TrendingUp, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockClasses, mockTeachers, mockAnnouncements } from '@/data/mockData';

const Dashboard = () => {
  // Default to student role - can be changed later
  const user = { name: 'Student', role: 'student' };

  const statsCards = user.role === 'manager' ? [
    { title: 'Total Classes', value: mockClasses.length, icon: BookOpen, color: 'text-blue-600' },
    { title: 'Total Teachers', value: mockTeachers.length, icon: Users, color: 'text-green-600' },
    { title: 'Announcements', value: mockAnnouncements.length, icon: Megaphone, color: 'text-purple-600' },
    { title: 'Enrolled Students', value: 127, icon: TrendingUp, color: 'text-orange-600' },
  ] : [
    { title: 'My Classes', value: 2, icon: BookOpen, color: 'text-blue-600' },
    { title: 'Available Classes', value: mockClasses.length - 2, icon: Calendar, color: 'text-green-600' },
    { title: 'My Teachers', value: 2, icon: Users, color: 'text-purple-600' },
    { title: 'Announcements', value: mockAnnouncements.filter(a => a.priority === 'high').length, icon: Megaphone, color: 'text-orange-600' },
  ];

  const quickActions = user.role === 'manager' ? [
    { title: 'Add New Class', description: 'Create a new class for students', icon: Plus, href: '/classes/new' },
    { title: 'Add Teacher', description: 'Register a new teacher', icon: Users, href: '/teachers/new' },
    { title: 'Create Announcement', description: 'Share important updates', icon: Megaphone, href: '/announcements/new' },
    { title: 'AI Assistant', description: 'Get AI-powered insights', icon: Brain, href: '/ai-assistant' },
  ] : [
    { title: 'Browse Classes', description: 'Find new classes to join', icon: BookOpen, href: '/classes' },
    { title: 'My Enrollments', description: 'Manage your class enrollments', icon: Calendar, href: '/enrollments' },
    { title: 'AI Recommendations', description: 'Get personalized course suggestions', icon: Brain, href: '/ai-assistant' },
    { title: 'View Teachers', description: 'Meet your instructors', icon: Users, href: '/teachers' },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
        <p className="text-muted-foreground">
          {user.role === 'manager' 
            ? 'Manage your summer school program from your dashboard.' 
            : 'Continue your learning journey with our summer courses.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <card.icon className={`h-4 w-4 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                {user.role === 'manager' 
                  ? 'Manage your summer school program' 
                  : 'Continue your learning journey'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action) => (
                  <Button
                    key={action.title}
                    variant="outline"
                    asChild
                    className="h-auto p-4 justify-start"
                  >
                    <Link to={action.href}>
                      <div className="flex items-center space-x-3">
                        <action.icon className="h-5 w-5" />
                        <div className="text-left">
                          <div className="font-medium">{action.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {action.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAnnouncements.slice(0, 3).map((announcement) => (
                  <div key={announcement.id} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className={`inline-block w-2 h-2 rounded-full ${
                        announcement.priority === 'high' ? 'bg-red-500' :
                        announcement.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`} />
                      <h3 className="font-medium text-sm">{announcement.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {announcement.content}
                    </p>
                  </div>
                ))}
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to="/announcements">View All</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;