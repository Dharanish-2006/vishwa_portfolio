import { Clock, Palette, Settings, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Video Editing',
      price: 'Starting at $200',
      features: [
        'Professional cutting and pacing',
        'Seamless transitions',
        'Multi-camera editing',
        'Timeline optimization',
      ],
      popular: false,
    },
    {
      icon: Palette,
      title: 'Color Grading',
      price: 'Starting at $150',
      features: [
        'Cinematic color correction',
        'Mood and tone enhancement',
        'Professional LUT application',
        'Skin tone optimization',
      ],
      popular: true,
    },
    {
      icon: Headphones,
      title: 'Audio Post-Production',
      price: 'Starting at $100',
      features: [
        'Audio mixing and mastering',
        'Noise reduction',
        'Music synchronization',
        'Voice-over integration',
      ],
      popular: false,
    },
    {
      icon: Clock,
      title: 'Rush Delivery',
      price: 'Starting at $300',
      features: [
        '24-48 hour turnaround',
        'Priority support',
        'Real-time collaboration',
        'Express revisions',
      ],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional video editing services tailored to bring your vision to life. 
            From concept to final delivery, I handle every aspect of post-production.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-up ${
                service.popular ? 'ring-2 ring-accent' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-accent" />
              </div>

              {/* Service Info */}
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {service.title}
              </h3>
              <div className="text-2xl font-bold text-accent mb-6">
                {service.price}
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                service.popular 
                  ? 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Custom Projects CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Need Something Custom?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every project is unique. Let's discuss your specific needs and create 
              a tailored solution that perfectly fits your vision and budget.
            </p>
            <button className="btn-hero">
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;