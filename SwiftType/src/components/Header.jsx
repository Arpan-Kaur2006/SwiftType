export default function Header({ mode, time }) {
  return (
    <header className="text-center">
      <h1 className="text-accent text-2xl font-bold tracking-wide m-0">
        swifttype
        <span className="text-muted font-normal text-base ml-3">
          · {mode} · {time === Infinity ? "∞" : `${time}s`}
        </span>
      </h1>
    </header>
  )
}