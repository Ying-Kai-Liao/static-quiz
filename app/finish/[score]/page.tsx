import ScoreClient from "./ScoreClient";
import Container from "@/components/Container";

interface IParams {
  params: { score: string }
}
export function generateStaticParams() {
  const scores: string[] = ['0', '1', '2', '3', '4', '5'];
  const paths = scores.map(score => ({ score }));
console.log(paths)
  return paths;
}

export default async function Home({ params: { score } }: IParams ) {
  return (
    <Container>
      <ScoreClient score={score} />
    </Container>
  );
}