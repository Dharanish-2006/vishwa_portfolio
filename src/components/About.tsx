import { Camera, Film, Zap, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '15M+', label: 'Views Generated' },
  ];

  const skills = [
    {
      icon: Film,
      title: 'Cinematic Editing',
      description: 'Creating visually stunning narratives with professional color grading and seamless transitions.',
    },
    {
      icon: Zap,
      title: 'Social Media Content',
      description: 'Fast-paced, engaging content optimized for different platforms and audiences.',
    },
    {
      icon: Camera,
      title: 'Storytelling',
      description: 'Crafting compelling stories that connect with viewers on an emotional level.',
    },
    {
      icon: Award,
      title: 'Post-Production',
      description: 'Complete post-production services including audio mixing, VFX, and motion graphics.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate video editor with a keen eye for detail and a love for storytelling. 
            My goal is to transform raw footage into compelling visual narratives that captivate and inspire.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;