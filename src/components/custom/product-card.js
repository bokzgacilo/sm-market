import { Stack, Image, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";

export default function ProductCard({ data }) {

  return (
    <Stack
      p={4}
      gap={0}
    >
      <Link href={`/${data.category}/${data.subcategory}/${data.slug}`} passHref>
        <Stack>
          <Image mb={6} src={data.images[0]} width="100%" height="300px" objectFit="contain"/>
          <Text fontSize="15px" color="#0030FF" fontWeight="semibold">{data.title}</Text>
        </Stack>
      </Link>
      <Text fontSize="22px" mt={4} mb={2} fontWeight="700">₱{data.price}</Text>
      <Button mt="auto" bgColor="#0030FF" size="xl">Add to Cart</Button>
    </Stack>
  )
}