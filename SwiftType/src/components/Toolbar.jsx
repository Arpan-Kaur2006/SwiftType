const MODES = [
  { id: "words", label: "words" },
  { id: "sentences", label: "sentences" },
  { id: "code", label: "code" },
];

const TIMES = [
  { id: 15, label: "15" },
  { id: 30, label: "30" },
  { id: 60, label: "60" },
  { id: Infinity, label: "∞" },
];

export default function Toolbar({ mode, time, onModeChange, onTimeChange }) {
  return (
    <div className="flex items-center justify-between bg-toolbar rounded-full px-7 py-3">
      <div className="flex gap-7">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => onModeChange(m.id)}
            className={`bg-transparent border-0 cursor-pointer font-mono text-base transition-colors duration-150 py-1 px-0 ${
              mode === m.id ? "text-accent font-semibold" : "text-muted hover:text-accent"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="w-px h-5 bg-divider" />

      <div className="flex gap-7">
        {TIMES.map((t) => (
          <button
            key={t.id}
            onClick={() => onTimeChange(t.id)}
            className={`bg-transparent border-0 cursor-pointer font-mono text-base transition-colors duration-150 py-1 px-0 ${
              time === t.id ? "text-accent font-bold" : "text-muted hover:text-accent"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}