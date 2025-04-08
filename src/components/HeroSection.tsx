import DownloadButton from "./DownloadButton";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 hero-pattern"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="gradient-text mb-6">
              Fast & Affordable Rides in Rwanda
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-md">
              Connect with motorcycle riders in your area for quick, reliable transportation at the tap of a button.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <DownloadButton platform="android" />
              <DownloadButton platform="ios" />
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-[500px] md:w-80 md:h-[700px] bg-black rounded-3xl p-4 shadow-xl animate-float">
              <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden">
                <div className="h-full w-full bg-gray-200 rounded-2xl flex items-center justify-center">
                  <img
                    src="/images/hero-phone.png"
                    alt="QuickRide App"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
