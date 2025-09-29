// pages/category/[type].js
import { useRouter } from "next/router";
import { Heading, Container, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import CustomBreadcrumb from "@/components/custom/custom-breadcrumb";
import formatTitle from "@/helper/slug";

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
      <Stack
        p={4}
        gap={4}
      >
        <CustomBreadcrumb 
          data={{
            root: "home",
            first: type
          }}
        />
        <Heading size="3xl" color="#0030FF">{formatTitle(type)}</Heading>
      </Stack>
    </>
  );
}