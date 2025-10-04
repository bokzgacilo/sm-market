// pages/category/[type].js
import { useRouter } from "next/router";
import { Heading, Stack, SimpleGrid, Card, HStack, Button, Flex, IconButton, Separator, NativeSelect } from "@chakra-ui/react";
import Head from "next/head";
import CustomBreadcrumb from "@/components/custom/custom-breadcrumb";
import formatTitle from "@/helper/slug";
import { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { getAllProducts, supabase } from "@/helper/supabase";
import ProductCard from "@/components/custom/product-card";

export default function CategoryPage() {
  const router = useRouter();
  const { category, subcategory } = router.query;
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const  fetchProducts = async () => {
      let data = await getAllProducts(category, subcategory)
      setAllProducts(data)
    }
    fetchProducts();
  }, [subcategory, category])

  const pageTitle = subcategory
    ? `${formatTitle(subcategory)} | SM Supermarket`
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
            first: category,
            second: subcategory
          }}
        />
        <Heading size="3xl" color="#0030FF">{formatTitle(subcategory)}</Heading>

        <Card.Root>
          <Card.Body p={0}>
            <Stack p={4}>
              <HStack>
                <Flex direction="row" gap={4}>
                  <Button variant="solid" colorPalette="blue">All</Button>
                  <Button variant="outline">New</Button>
                  <Button variant="outline">Sale</Button>
                </Flex>
                <Flex gap={4} ml="auto" w="250px">
                  <IconButton rounded="full" variant="outline">
                    <FiFilter />
                  </IconButton>
                  <Separator orientation="vertical" />
                  <NativeSelect.Root variant="subtle">
                    <NativeSelect.Field>
                      <option>Popularity</option>
                      <option>Prices: Low to High</option>
                      <option>Prices: High to Low</option>
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                  </NativeSelect.Root>
                </Flex>
              </HStack>
              <SimpleGrid mt={4} columns={5}>
                {allProducts.map((item, key) => (
                  <ProductCard
                    data={item}
                    key={key}
                  />
                ))}
              </SimpleGrid>
            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </>
  );
}