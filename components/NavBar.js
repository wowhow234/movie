import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <div>
        <Link
          href="/"
          style={{ color: router.pathname === "/" ? "red" : "blue" }}
        >
          Home
        </Link>
        <Link
          href="/"
          style={{ color: router.pathname === "/popular" ? "red" : "blue" }}
        >
          Popular
        </Link>
      </div>
    </nav>
  );
}
