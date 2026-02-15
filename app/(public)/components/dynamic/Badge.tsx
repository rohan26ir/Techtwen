import { Phone } from "lucide-react";

interface BadgeProps {
  title: string;
}

export default function Badge({ title }: BadgeProps) {
  return (
    <div
      className="inline-flex items-center justify-center      "
    >
      <div
        className="
          flex items-center gap-2
          px-5 py-2
          bg-secondary 
          text-secondary-foreground       /* automatic text color contrast */
          font-medium text-sm
          rounded-2xl
          shadow-[inset_1px_1px_4px_hsl(var(--border)/0.15),inset_-1px_-1px_4px_hsl(0_0%_100%/0.6)]
          dark:shadow-[inset_2px_2px_5px_hsl(0_0%_0%/0.4),inset_-2px_-2px_5px_hsl(0_0%_100%/0.06)]
          transition-shadow duration-200
          whitespace-nowrap
        "
      >
        <Phone size={14} className="text-amber-600 dark:text-amber-500" />
        {title}
      </div>
    </div>
  );
}