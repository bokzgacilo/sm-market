// pages/category/[type].js
import { useRouter } from "next/router";
import Layout from "../index"; // reuse your layout
import { Container, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

function formatTitle(slug) {
  if (!slug) return "";
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function CategoryPage() {
  const router = useRouter();
  const { type } = router.query;

  const pageTitle = type
    ? `${formatTitle(type)} | SM Supermarket`
    : "Category | SM Supermarket";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Stack>
        <Text>{type}</Text>
      </Stack>
    </>
  );
}