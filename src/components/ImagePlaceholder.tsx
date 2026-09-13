import { ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
}

export function ImagePlaceholder({ className, text = "Photo coming soon" }: ImagePlaceholderProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center bg-beige-200 text-charcoal-800/40 w-full h-full min-h-[200px] border border-beige-200/50 rounded-sm", className)}>
      <ImageIcon className="w-10 h-10 mb-3 opacity-40" />
      <span className="font-medium tracking-widest uppercase text-xs sm:text-sm">{text}</span>
    </div>
  );
}
