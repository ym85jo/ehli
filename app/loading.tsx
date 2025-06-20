export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex space-x-2">
        <div className="bg-primary h-3 w-3 animate-bounce rounded-full"></div>
        <div
          className="bg-primary h-3 w-3 animate-bounce rounded-full"
          style={{ animationDelay: '0.1s' }}
        ></div>
        <div
          className="bg-primary h-3 w-3 animate-bounce rounded-full"
          style={{ animationDelay: '0.2s' }}
        ></div>
      </div>
    </div>
  );
}
