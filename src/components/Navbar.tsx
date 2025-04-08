import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleDownload = () => {
    // Link to download APK directly
    window.location.href = '/quickride.apk';
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="QuickRide Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-2xl font-bold gradient-text">QuickRide</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-quickride-purple transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-quickride-purple transition-colors">How It Works</a>
          <a href="#faq" className="text-gray-600 hover:text-quickride-purple transition-colors">FAQ</a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-quickride-purple hover:bg-quickride-dark-purple" onClick={handleDownload}>
            Download App
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4 z-50">
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-quickride-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-quickride-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#faq" 
              className="text-gray-600 hover:text-quickride-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="bg-quickride-purple hover:bg-quickride-dark-purple w-full" onClick={handleDownload}>
              Download App
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
