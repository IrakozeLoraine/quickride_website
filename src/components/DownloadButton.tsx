import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  platform: "android" | "ios";
  showIcon?: boolean;
  className?: string;
}

const DownloadButton = ({ platform, showIcon = true, className = "" }: DownloadButtonProps) => {
  const isAndroid = platform === "android";
  
  const handleDownload = () => {
    if (isAndroid) {
      // Link to download APK directly
      window.location.href = '/quickride.apk';
    } else {
      // Link to iOS IPA directly
      window.location.href = '/quickride.ipa';
    }
  };
  
  return (
    <Button 
      onClick={handleDownload}
      className={`${className} ${isAndroid ? 'bg-green-500 hover:bg-green-700' : 'bg-black hover:bg-gray-800'} flex items-center gap-2 px-8 py-6`}
    >
      {showIcon && <Download size={20} />}
      <div className="flex flex-col items-center">
        <span className="text-xs">Download for</span>
        <span className="font-semibold">{isAndroid ? 'Android' : 'iOS'}</span>
      </div>
    </Button>
  );
};

export default DownloadButton;
