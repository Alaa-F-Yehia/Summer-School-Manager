import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Star, Plus, BookOpen, Award } from 'lucide-react';
// Removed mockTeachers import

const Teachers = () => {
  const user = { role: 'student' }; // Default role
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/teachers')
      .then(res => res.json())
      .then(data => setTeachers(data));
  }, []);

  const filteredTeachers = teachers;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Teachers</h1>
          <p className="text-muted-foreground">
            {user?.role === 'manager' 
              ? 'Manage your teaching staff' 
              : 'Meet your instructors'}
          </p>
        </div>
        {user?.role === 'manager' && (
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Teacher
          </Button>
        )}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <Card key={teacher.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <Award className="h-4 w-4 mr-1" />
                    {teacher.experience} experience
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(teacher.rating)}
                  <span className="text-sm text-muted-foreground ml-1">
                    {teacher.rating}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {teacher.bio}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {teacher.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Classes
                </Button>
                {user?.role === 'manager' && (
                  <Button variant="outline" className="flex-1">
                    Edit
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTeachers.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No teachers found</h3>
          <p className="text-muted-foreground">
            No teachers available at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default Teachers;