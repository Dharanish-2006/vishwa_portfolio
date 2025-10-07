import { Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cinematic{' '}
              <span className="text-white bg-gradient-accent bg-clip-text">
                Storytelling
              </span>{' '}
              Through Video
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional video editor specializing in cinematic narratives, 
              social media content, and compelling storytelling that captivates audiences.
            </p>
            
            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['Cinematic Editing', 'Social Media', 'Storytelling', 'Color Grading'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo Reel
              </Button>
              <Button variant="outline" className="btn-secondary">
                <Download className="mr-2 h-5 w-5" />
                Download Portfolio
              </Button>
            </div>
          </div>

          {/* Right Content - Video Placeholder */}
          <div className="animate-fade-in">
            <div className="relative group">
              <div className="aspect-video bg-gradient-card rounded-2xl shadow-elegant overflow-hidden">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <Play className="mx-auto h-16 w-16 text-accent mb-4" />
                    <p className="text-lg font-semibold">Featured Demo Reel</p>
                    <p className="text-muted-foreground">Click to play</p>
                  </div>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-glow">
                  <Play className="h-8 w-8 text-accent-foreground ml-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;