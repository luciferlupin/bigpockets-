import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-2xl"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin">
            <div className="w-2 h-2 bg-primary rounded-full absolute top-1 left-1/2 -translate-x-1/2" />
          </div>
          <p className="text-sm text-text-muted">Loading...</p>
        </div>
      </motion.div>
    </div>
  );
}
