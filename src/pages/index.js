import Link from "next/link";

function Home(){
  return (
    <div>
      <h1>Home Page</h1>

      <Link href="/member/login">Login</Link>
      <Link href="/member/register">Register </Link>
    </div>
  )
}

export default Home;