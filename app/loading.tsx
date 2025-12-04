export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-600 border-t-transparent"></div>

      <style jsx>{`
        .animate-spin {
          animation: spin 0.9s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
