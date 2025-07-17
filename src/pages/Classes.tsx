import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Users, Clock, Plus, BookOpen } from 'lucide-react';
import { mockClasses } from '@/data/mockData';
import { Class } from '@/types';

const Classes = () => {
  const user = { role: 'student' }; // Default role

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEnrollmentStatus = (cls: Class) => {
    const percentage = (cls.enrolled / cls.capacity) * 100;
    if (percentage >= 90) return { text: 'Almost Full', color: 'text-red-600' };
    if (percentage >= 70) return { text: 'Filling Up', color: 'text-yellow-600' };
    return { text: 'Available', color: 'text-green-600' };
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Summer Camp Activities</h1>
          <p className="text-muted-foreground">
            {user?.role === 'manager' 
              ? 'Manage your summer camp activities' 
              : 'Browse and enroll in exciting camp activities'}
          </p>
        </div>
        {user?.role === 'manager' && (
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Activity
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockClasses.map((cls) => {
          const status = getEnrollmentStatus(cls);
          return (
            <Card key={cls.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{cls.name}</CardTitle>
                    <CardDescription className="text-sm">{cls.teacher}</CardDescription>
                  </div>
                  <Badge className={getLevelColor(cls.level)}>
                    {cls.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {cls.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {cls.schedule}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {cls.enrolled}/{cls.capacity} campers
                  </div>
                  <div className="flex items-center text-sm">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span className={status.color}>{status.text}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {user?.role === 'student' ? (
                    <Button className="flex-1" disabled={cls.enrolled >= cls.capacity}>
                      {cls.enrolled >= cls.capacity ? 'Full' : 'Join Activity'}
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" className="flex-1">
                        Edit
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {mockClasses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No activities found</h3>
          <p className="text-muted-foreground">
            Check back later for more exciting camp activities!
          </p>
        </div>
      )}
    </div>
  );
};

export default Classes;