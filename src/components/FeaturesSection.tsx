import { Check, MapPin, Clock, Shield, BadgeDollarSign } from "lucide-react";
import DownloadButton from "./DownloadButton";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-quickride-green rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const features = [
  {
    icon: <MapPin className="text-quickride-purple" />,
    title: "Find Nearby Riders",
    description: "Quickly locate available motorcycle riders in your area with real-time GPS tracking."
  },
  {
    icon: <BadgeDollarSign className="text-quickride-purple" />,
    title: "Transparent Pricing",
    description: "Negotiate fares directly with riders through the app before confirming your ride."
  },
  {
    icon: <Clock className="text-quickride-purple" />,
    title: "Save Time",
    description: "No more waiting or walking to find a ride - request and confirm in seconds."
  },
  {
    icon: <Shield className="text-quickride-purple" />,
    title: "Ride Safely",
    description: "Review rider profiles, ratings, and reviews before booking your ride."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">Why Choose QuickRide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're transforming urban mobility in Rwanda with innovative solutions for passengers and riders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-quickride-yellow p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Are You a Motorcycle Rider?</h3>
              <p className="text-gray-700">
                Join our platform to increase your earnings, find more passengers, and grow your business.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Access to more customers in your area",
                  "Reduce idle time between rides",
                  "Build your reputation with ratings and reviews",
                  "Transparent fare negotiations"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check size={20} className="text-quickride-purple mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <DownloadButton platform="android" className="w-full md:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
