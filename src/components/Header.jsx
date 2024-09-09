import Card from "./Card";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <Card className="bg-[var(--soft-red)] flex justify-between items-center text-white">
        <div>
          <p>My balance</p>
          <p className="text-3xl font-bold tracking-wide">$921.48</p>
        </div>
        <Logo />
      </Card>
    </header>
  );
}
