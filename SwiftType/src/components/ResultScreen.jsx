export default function ResultScreen({ stats, onRestart }) {
  return (
    <div className="min-h-48 flex flex-col items-center justify-center gap-6">
      <div className="flex gap-16">
        <div className="text-center">
          <p className="text-muted text-xs tracking-widest uppercase m-0 mb-1">wpm</p>
          <p className="text-accent text-5xl font-bold m-0">{stats.wpm}</p>
        </div>
        <div className="text-center">
          <p className="text-muted text-xs tracking-widest uppercase m-0 mb-1">accuracy</p>
          <p className="text-accent text-5xl font-bold m-0">{stats.accuracy}%</p>
        </div>
      </div>
      <button
        onClick={onRestart}
        className="mt-4 bg-transparent border border-muted text-muted font-mono text-sm rounded px-6 py-2 cursor-pointer hover:text-accent hover:border-accent transition-colors duration-150"
      >
        restart
      </button>
    </div>
  );
}