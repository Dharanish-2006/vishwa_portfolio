import { useState } from "react";
import { Play, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  category: string;
  duration: string;
  views: string;
  description: string;
  videoSrc: string;
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "cinematic", label: "Cinematic" },
    { id: "social", label: "Social Media" },
    { id: "commercial", label: "Commercial" },
    { id: "music", label: "Music Videos" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Epic Adventure Documentary",
      category: "cinematic",
      duration: "3:45",
      views: "2.5M",
      description: "A breathtaking journey through untamed landscapes.",
      videoSrc: "/vid/proj1.mp4",
    },
    {
      id: 2,
      title: "Tech Product Launch",
      category: "commercial",
      duration: "1:30",
      views: "850K",
      description: "Dynamic product showcase with sleek animations.",
      videoSrc: "/vid/proj2.mp4",
    },
    {
      id: 3,
      title: "Instagram Reel Series",
      category: "social",
      duration: "0:30",
      views: "3.2M",
      description: "Viral social media content that drives engagement.",
      videoSrc: "/vid/proj3.mp4",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-accent">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore a collection of my best work spanning multiple styles.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  activeFilter === filter.id
                    ? "bg-accent text-accent-foreground shadow-glow"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group portfolio-item animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted rounded-xl relative overflow-hidden">

                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-12 w-12 text-accent" />
                  </div>

                  <div className="portfolio-overlay flex items-center justify-center">
                    <Button
                      className="btn-hero"
                      onClick={() => setActiveVideo(project)}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Video
                    </Button>
                  </div>

                  <div className="absolute top-3 right-3 bg-background/90 px-2 py-1 rounded text-sm">
                    {project.duration}
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground mb-3">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-accent">
                      {project.views} views
                    </span>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">

            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 bg-black/60 p-2 rounded-full text-white"
            >
              <X />
            </button>

            <video
              src={activeVideo.videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
