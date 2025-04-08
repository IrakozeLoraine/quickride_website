import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
{
    question: "How do I download the QuickRide app?",
    answer: "QuickRide is available for both Android and iOS devices. You can currently download it by clicking the download buttons on this website."
},
{
    question: "How does fare negotiation work?",
    answer: "After selecting your pickup and destination locations, you can suggest a fare for your trip. Nearby riders will see your request and can accept your offer or propose a counter-offer. You can then choose to accept or continue negotiating until you reach an agreement."
},
{
    question: "Is QuickRide safe to use?",
    answer: "Safety is our top priority. All riders on our platform are verified and licensed motorcycle operators. We also have a rating and review system that helps maintain quality service. Additionally, you can track your ride in real-time and share your trip details with trusted contacts."
},
{
    question: "What areas does QuickRide serve?",
    answer: "QuickRide currently operates in all areas with internet accessibility across Rwanda. We're continuously expanding to new locations to serve more communities."
},
{
    question: "How do I become a QuickRide motorcycle rider?",
    answer: "To become a QuickRide rider, you must have a valid motorcycle license and registration. Download the app, select 'Register as Rider,' and follow the verification process which includes submitting your licensing information and completing a brief orientation."
},
{
    question: "What if I have an issue with my ride?",
    answer: "If you experience any issues during your ride, you can access our in-app support feature to report problems. Our customer service team is available to assist with disputes, safety concerns, or general inquiries."
}
];

const FAQSection = () => {
return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="gradient-text mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about QuickRide.
        </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-100">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                {faq.answer}
                </AccordionContent>
            </AccordionItem>
            ))}
        </Accordion>
        </div>
    </div>
    </section>
);
};

export default FAQSection;
