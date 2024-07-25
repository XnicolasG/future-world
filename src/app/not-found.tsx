import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="NotFound">
      <h1 className="NotFound__title">404</h1>
      <Image
        src="/images/404.png"
        alt="404"
        width={300}
        height={300}
      />
      <h2 className="NotFound__subtitle">
        ¡Looks like we lost our path!
      </h2>
      <p className="NotFound__description">{`But we're open 24/7`}</p>
      <Link className="NotFound__link" href="/store">
        Go Shoping
      </Link>
    </main>
  );
}