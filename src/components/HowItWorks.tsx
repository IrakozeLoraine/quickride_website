import { 
    Smartphone, 
    Search, 
    MessageCircle, 
    MapPin, 
    ThumbsUp
} from "lucide-react";

const steps = [
{
    icon: <Smartphone size={24} className="text-quickride-purple" />,
    title: "Download the App",
    type: "web",
    description: "Get QuickRide on your Android or iOS device by clicking the download buttons on this website."
},
{
    icon: <Search size={24} className="text-quickride-purple" />,
    title: "Find Nearby Riders",
    type: "mobile",
    description: "Enter your pickup location to see available motorcycle riders nearby."
},
{
    icon: <MessageCircle size={24} className="text-quickride-purple" />,
    title: "Negotiate Your Fare",
    type: "mobile",
    description: "Chat with the rider to agree on a fair price for your journey."
},
{
    icon: <MapPin size={24} className="text-quickride-purple" />,
    title: "Track Your Ride",
    type: "mobile",
    description: "Follow your rider's location in real-time as they come to pick you up and as they take you to your destination."
},
{
    icon: <ThumbsUp size={24} className="text-quickride-purple" />,
    title: "Rate Your Experience",
    type: "mobile",
    description: "After your ride, rate your driver and provide feedback to help others."
}
];

const HowItWorks = () => {
return (
    <section id="how-it-works" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="gradient-text mb-4">How QuickRide Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Getting from point A to B has never been easier with our simple process.
        </p>
        </div>
        
        <div className="relative">
        {/* Connection line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2"></div>
        
        <div className="space-y-16">
            {steps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} mb-6 md:mb-0`}>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="md:w-14 relative">
                <div className="absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-quickride-green flex items-center justify-center z-10">
                    {step.icon}
                </div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                    {step.type === "web" ? (
                        <div className="relative w-[300px] xl:w-full h-[190px] xl:h-[300px] bg-black rounded-3xl p-4 shadow-xl animate-float">
                            <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden">
                                <div className="h-full w-full bg-gray-200 rounded-2xl flex items-center justify-center">
                                <img
                                    src={`/images/how-it-works/${index + 1}.png`}
                                    alt={step.title}
                                    className="w-full h-full object-cover"
                                />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="relative w-64 h-[500px] md:w-80 md:h-[700px] bg-black rounded-3xl p-4 shadow-xl animate-float">
                            <div className="absolute inset-2 bg-white rounded-2xl overflow-hidden">
                                <div className="h-full w-full bg-gray-200 rounded-2xl flex items-center justify-center">
                                <img
                                    src={`/images/how-it-works/${index + 1}.png`}
                                    alt={step.title}
                                    className="w-full h-full object-cover"
                                />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
    </section>
);
};

export default HowItWorks;