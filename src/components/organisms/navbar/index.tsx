import type { NavItem } from "@/types/portfolio";

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  return (
    <div className="nav-wrap">
      <nav className="nav">
        {items.map((item) => (
          <a key={`${item.name}-${item.link}`} href={item.link}>
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
