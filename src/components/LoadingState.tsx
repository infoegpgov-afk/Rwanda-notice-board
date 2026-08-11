export function LoadingState() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="inline-flex items-center gap-2">
        <div className="w-3 h-3 bg-rwanda-600 rounded-full animate-bounce" />
        <div className="w-3 h-3 bg-rwanda-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
        <div className="w-3 h-3 bg-rwanda-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <span className="ml-2 text-gray-600">Loading...</span>
      </div>
    </div>
  );
}
