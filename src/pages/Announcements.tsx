import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Calendar, User, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { mockAnnouncements } from '@/data/mockData';

const Announcements = () => {
  const user = { role: 'student' }; // Default role
  const [selectedPriority, setSelectedPriority] = useState<string>('all');

  const priorities = ['all', 'high', 'medium', 'low'];
  
  const filteredAnnouncements = mockAnnouncements.filter(announcement => {
    const matchesPriority = selectedPriority === 'all' || announcement.priority === selectedPriority;
    return matchesPriority;
  });

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'medium':
        return <Info className="h-4 w-4 text-yellow-500" />;
      case 'low':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Info className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Announcements</h1>
          <p className="text-muted-foreground">
            {user?.role === 'manager' 
              ? 'Manage school announcements and updates' 
              : 'Stay updated with the latest school news'}
          </p>
        </div>
        {user?.role === 'manager' && (
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Announcement
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {priorities.map(priority => (
          <Button
            key={priority}
            variant={selectedPriority === priority ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPriority(priority)}
            className="capitalize"
          >
            {priority}
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredAnnouncements.map((announcement) => (
          <Card key={announcement.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {getPriorityIcon(announcement.priority)}
                    <Badge className={getPriorityColor(announcement.priority)}>
                      {announcement.priority.toUpperCase()}
                    </Badge>
                    <Badge variant="outline">
                      {announcement.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{announcement.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {announcement.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(announcement.createdAt)}
                    </span>
                  </CardDescription>
                </div>
                {user?.role === 'manager' && (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {announcement.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAnnouncements.length === 0 && (
        <div className="text-center py-12">
          <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No announcements found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Announcements;