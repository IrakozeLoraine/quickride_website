import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  platform: "android" | "ios";
  className?: string;
}

const DownloadButton = ({ platform, className = "" }: DownloadButtonProps) => {
  const isAndroid = platform === "android";
  
  const handleDownload = () => {
    // In a real app, this would link to the app store or download the APK
    if (isAndroid) {
      // Link to download APK directly
    } else {
      // Link to iOS App Store
    }
  };
  
  return (
    <Button 
      onClick={handleDownload}
      className={`${className} ${isAndroid ? 'bg-blue-800 hover:bg-blue-500' : 'bg-black hover:bg-gray-800'} flex items-center gap-2 px-8 py-6`}
    >
      <Download size={20} />
      <div className="flex flex-col items-center">
        <span className="text-xs">Download for</span>
        <span className="font-semibold">{isAndroid ? 'Android' : 'iOS'}</span>
      </div>
    </Button>
  );
};

export default DownloadButton;
