import { animations } from "@/app/lib/constants";


interface TrustBadgeProps {
  icon: string;
  text: string;
  description: string;
}

export default function TrustBadge({ icon, text, description }: TrustBadgeProps) {
  return (
    <div className="flex flex-col items-center text-center group hover:transform hover:-translate-y-1 transition-all duration-300">
      <div className={`text-3xl mb-3 ${animations.hoverScale}`}>
        {icon}
      </div>
      <div className="font-semibold text-neutral-900 text-sm mb-1">
        {text}
      </div>
      <div className="text-xs text-neutral-500">
        {description}
      </div>
    </div>
  );
}