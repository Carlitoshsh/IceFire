import Quote from "@/components/shared/Quote";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Ice and Fire!</h1>
      <p>UI work that uses the <Link href="https://anapioficeandfire.com/">An API of Ice And Fire</Link> made by <Link href="https://joakimskoog.com/">Joakim Skoog</Link> </p>
      <Quote quote="Test"></Quote>
    </>
  );
}
