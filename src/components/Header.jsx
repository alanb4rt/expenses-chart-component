import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[var(--soft-red)] p-8 rounded-2xl text-white">
      <div>
        <p>My balance</p>
        <p className="text-2xl font-bold">$921.48</p>
      </div>
      <Logo />
    </header>
  );
}
