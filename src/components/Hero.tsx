import { Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-hero"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="mt-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words text-center">
              Cinematic{" "}
              <span className="text-white bg-gradient bg-clip-text">
                Storytelling
              </span>{" "}
              Through Video
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional video editor specializing in cinematic narratives,
              social media content, and compelling storytelling that captivates
              audiences.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Cinematic Editing",
                "Social Media",
                "Storytelling",
                "Color Grading",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>

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

          {/* Right Content - Video */}
          <div className="animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-video">

              {/* VIDEO */}
              {isPlaying && (
                <video
                  src="https://res.cloudinary.com/dc4dgwpyq/video/upload/v1769927077/proj1_g5i8r7.mp4"
                  autoPlay
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              )}

              {/* PLACEHOLDER */}
              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-muted hover:bg-muted/80 transition"
                >
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-glow mb-4">
                    <Play className="h-8 w-8 text-accent-foreground ml-1" />
                  </div>
                  <p className="text-lg font-semibold">Featured Demo Reel</p>
                  <p className="text-muted-foreground">Click to play</p>
                </button>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
