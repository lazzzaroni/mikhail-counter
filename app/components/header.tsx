import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl tracking-tight">
        <span className="font-light">MIKHAIL</span>
        <span className="font-semibold">COUNTER</span>
      </h1>
      <ModeToggle />
    </header>
  );
}
