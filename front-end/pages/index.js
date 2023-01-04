import Navbar from "../components/Navbar/Navbar";
import Header from "../components/header/Header";
import SliderDiscover from "../components/SliderDiscover/SliderDiscover";
import List from "../components/List/List";
import theme from "../theme/theme";

import { ColorModeScript } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

export async function getStaticProps() {
  const vnData = await (await fetch("http://localhost:3001/top/")).json();

  return {
    props: {
      vnData,
    },
  };
}

export default function Home({ vnData }) {
  return (
    <div>
      <ColorModeScript initialColorMode={"dark"} />
      <Header />
      <SliderDiscover />
      <Navbar />

      <Text fontSize="2xl" as="b" p="5">
        Top Visual Novel
      </Text>

      {vnData.map((iten, index) => (
        <div>
          <Link href={"/vn/" + iten.id}>
            <List
              title={String(iten.title).slice(0, 22)}
              popularity={iten.popularity}
              rating={iten.rating}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
