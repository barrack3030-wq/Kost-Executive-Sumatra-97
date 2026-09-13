import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingWA() {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <a
        href="https://wa.me/62811344561"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </motion.div>
  );
}
