import { Star, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import ButtonDownload from "./ButtonDownload";
import MyImage from "@/assets/image copy 3.png"

type ProfileCardProps = {
  name: string;
  role: string;
  status: "online" | "offline" | "away";
  tags?: string[];
  isVerified?: boolean;
  followers?: number;
};

export default function AnimatedProfileCard() {
  const alexProfile: ProfileCardProps = {
    name: "Pen Menghong",
    role: "Full Stack Developer",
    status: "online",
    tags: ["Premium"],
    isVerified: true,
    followers: 994,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-100 to-red-400 dark:bg-gray-900 flex items-center min-w-screen justify-center p-4 relative overflow-hidden">
      {/* Animated Grid Background */}
      

      <ProfileCard {...alexProfile} />

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
      `}</style>
    </div>
  );
}

function ProfileCard({
  name,
  role,
  status,

  tags = [],
  isVerified,
  followers,
}: ProfileCardProps) {
  return (
    <div className="group  absolute top-24 overflow-hidden rounded-3xl bg-white dark:bg-gray-800 p-6 w-80 shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.9)] dark:shadow-[12px_12px_24px_rgba(0,0,0,0.3),-12px_-12px_24px_rgba(255,255,255,0.1)] transition-all duration-500 hover:shadow-[20px_20px_40px_rgba(0,0,0,0.2),-20px_-20px_40px_rgba(255,255,255,1)] dark:hover:shadow-[20px_20px_40px_rgba(0,0,0,0.4),-20px_-20px_40px_rgba(255,255,255,0.15)] hover:scale-105 hover:-translate-y-2">
      {/* Status indicator with pulse animation */}
      <div className="absolute right-4 top-4 z-10">
        <div className="relative">
          <div
            className={cn(
              "h-3 w-3 rounded-full border-2 border-white dark:border-gray-800 transition-all duration-300 group-hover:scale-125",
              status === "online"
                ? "bg-green-500 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"
                : status === "away"
                ? "bg-amber-500"
                : "bg-gray-400"
            )}
          ></div>
          {status === "online" && (
            <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping opacity-30"></div>
          )}
        </div>
      </div>

      {/* Verified badge with bounce animation */}
      {isVerified && (
        <div className="absolute right-4 top-10 z-10">
          <div className="rounded-full bg-red-500 dark:bg-white-600 p-1 shadow-[2px_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Star className="h-3 w-3 fill-white text-white" />
          </div>
        </div>
      )}

      {/* Profile Photo with enhanced hover effects */}
      <div className="mb-4 flex justify-center relative z-10">
        <div className="relative group-hover:animate-pulse">
          <div className="h-28 w-28 overflow-hidden rounded-full bg-white dark:bg-gray-700 p-1 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.9)] dark:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.3),inset_-6px_-6px_12px_rgba(255,255,255,0.1)] transition-all duration-500 group-hover:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.15),inset_-8px_-8px_16px_rgba(255,255,255,1)] dark:group-hover:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.4),inset_-8px_-8px_16px_rgba(255,255,255,0.15)] group-hover:scale-110">
            <img
              src={MyImage}
              alt={name}
              className="h-full w-full rounded-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* Glowing ring on hover */}
          <div className="absolute inset-0 rounded-full border-2 border-red-400 dark:border-white-500 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
        </div>
      </div>

      {/* Profile Info with slide-up animation */}
      <div className="text-center relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-red-600 dark:group-hover:text-white-400">
          {name}
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
          {role}
        </p>

        {followers && (
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 transition-all duration-300 group-hover:text-red-500 dark:group-hover:text-white-400 group-hover:font-medium">
            {followers.toLocaleString()} followers
          </p>
        )}
      </div>

      {/* Tags with bounce animation */}
      {tags.length > 0 && (
        <div className="mt-4 flex justify-center gap-2 relative z-10">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={cn(
                "inline-block rounded-full bg-white dark:bg-gray-100 px-3 py-1 text-xs font-medium shadow-[2px_2px_4px_rgb(241,70,115),-2px_-2px_4px_rgba(255,255,255,0.8)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.2),-2px_-2px_4px_rgba(255,255,255,0.1)] transition-all duration-300",
                tag === "Premium"
                  ? "text-red-600 dark:text--400 group-hover:bg-blue-50 dark:group-hover:bg-red-200 group-hover:scale-105 group-hover:shadow-[0_0_10px_rgb(255,23,84)]"
                  : "text-gray-600 dark:text-gray-300 group-hover:scale-105"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons with enhanced hover effects and increased height */}
      <div className="mt-6 flex gap-2 relative z-10 justify-between">
        <a href="https://www.facebook.com/share/1EEeL9TCFs/">
          <button className="flex-1 rounded-full bg-white dark:bg-gray-700 py-4 text-sm font-medium text-red-600 dark:text-blue-400 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.9)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[2px_2px_4px_rgba(0,0,0,0.05),-2px_-2px_4px_rgba(255,255,255,0.8)] dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.15),-2px_-2px_4px_rgba(255,255,255,0.05)] hover:scale-95 active:scale-90 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">
            <UserPlus className="mx-auto h-4 w-4 transition-transform duration-300 hover:scale-110" />
          </button>
        </a>
         <ButtonDownload/>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-3xl border border-red-400 dark:border-white-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}
