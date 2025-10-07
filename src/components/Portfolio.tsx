import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'cinematic', label: 'Cinematic' },
    { id: 'social', label: 'Social Media' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'music', label: 'Music Videos' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Epic Adventure Documentary',
      category: 'cinematic',
      thumbnail: 'placeholder-1',
      duration: '3:45',
      views: '2.5M',
      description: 'A breathtaking journey through untamed landscapes.',
    },
    {
      id: 2,
      title: 'Tech Product Launch',
      category: 'commercial',
      thumbnail: 'placeholder-2',
      duration: '1:30',
      views: '850K',
      description: 'Dynamic product showcase with sleek animations.',
    },
    {
      id: 3,
      title: 'Instagram Reel Series',
      category: 'social',
      thumbnail: 'placeholder-3',
      duration: '0:30',
      views: '3.2M',
      description: 'Viral social media content that drives engagement.',
    },
    {
      id: 4,
      title: 'Indie Artist Music Video',
      category: 'music',
      thumbnail: 'placeholder-4',
      duration: '4:12',
      views: '1.8M',
      description: 'Artistic expression through visual storytelling.',
    },
    {
      id: 5,
      title: 'Corporate Brand Story',
      category: 'commercial',
      thumbnail: 'placeholder-5',
      duration: '2:15',
      views: '650K',
      description: 'Compelling narrative for brand identity.',
    },
    {
      id: 6,
      title: 'Travel Vlog Series',
      category: 'cinematic',
      thumbnail: 'placeholder-6',
      duration: '8:30',
      views: '4.1M',
      description: 'Immersive travel experiences with cinematic flair.',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore a collection of my best work spanning various genres and styles, 
            each crafted with precision and creative vision.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-accent text-accent-foreground shadow-glow'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group portfolio-item animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-muted rounded-xl mb-4 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <Play className="h-12 w-12 text-accent" />
                </div>
                
                {/* Overlay on hover */}
                <div className="portfolio-overlay flex items-center justify-center">
                  <Button className="btn-hero">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Video
                  </Button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-background/90 text-foreground px-2 py-1 rounded text-sm font-medium">
                  {project.duration}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-accent font-medium">
                    {project.views} views
                  </span>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground hover:bg-accent">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-secondary">
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;