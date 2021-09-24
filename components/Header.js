import Link from "next/link";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">halo</Link>
        </li>
        <li>
          <Link href="/Blog">hai</Link>
        </li>
        <li>
          <Link href="/user/user">helo</Link>
        </li>
      </ul>
    </div>
  );
}
