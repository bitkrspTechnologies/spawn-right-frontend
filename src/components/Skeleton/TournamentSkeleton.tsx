const TournamentSkeleton = () => (
  <div className="max-w-md w-full rounded-xl border border-white/20 p-4 bg-gradient-to-br from-white/5 to-white/[0.02] animate-pulse">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-4">
        <div className="h-4 w-16 bg-gray-700 rounded"></div>
        <div className="h-4 w-4 bg-gray-700 rounded-full"></div>
        <div className="h-4 w-16 bg-gray-700 rounded"></div>
      </div>
      <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
    </div>

    <div className="space-y-4">
      {[1, 2].map((i) => (
        <div key={i} className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-gray-700 rounded-full"></div>
            <div className="h-4 w-20 bg-gray-700 rounded"></div>
          </div>
          <div className="h-4 w-10 bg-gray-700 rounded mr-20"></div>
        </div>
      ))}
    </div>

    <div className="mt-4">
      <div className="h-4 w-32 bg-gray-700 rounded"></div>
      <div className="border-t border-white/20 mt-3 -mx-4"></div>
    </div>

    <div className="text-right mt-3">
      <div className="h-6 w-24 bg-gray-700 rounded inline-block"></div>
    </div>
  </div>
);

export default TournamentSkeleton;
