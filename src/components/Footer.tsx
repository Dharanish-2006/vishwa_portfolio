import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-xl font-bold text-accent">VideoEditor</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              © {currentYear} All rights reserved
            </span>
          </div>

          {/* Made with Love */}
          <div className="flex items-center text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-2 text-accent fill-current" />
            <span>for creative storytelling</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;