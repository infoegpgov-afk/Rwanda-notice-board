interface ErrorStateProps {
  title: string;
  message: string;
  icon?: string;
}

export function ErrorState({
  title,
  message,
  icon = '⚠️',
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-red-600 mb-2">{title}</h3>
      <p className="text-gray-600">{message}</p>
    </div>
  );
}
