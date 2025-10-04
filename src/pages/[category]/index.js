'use client';
import { useRouter } from "next/router";
import { Heading, Stack, Flex, Card, HStack, Tag, Button, NativeSelect, IconButton, Separator, SimpleGrid, Center, Spinner } from "@chakra-ui/react";
import Head from "next/head";
import CustomBreadcrumb from "@/components/custom/custom-breadcrumb";
import formatTitle from "@/helper/slug";
import Link from "next/link";
import { FiFilter } from "react-icons/fi";
import { useEffect,useCallback, useState } from "react";
import { getAllProducts, supabase } from "@/helper/supabase";
import dynamic from 'next/dynamic';
import ProductCard from "@/components/custom/product-card";

const ModelViewer = dynamic(() => import('@/components/custom/ModelViewer'), {
  ssr: false,
});

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const [subcategoriesArray, setSubcategoriesArray] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getSubcategories = useCallback(async () => {
    let { data: subcategories, error } = await supabase
      .from('categories')
      .select('subcategories')
      .eq('slug', category)
      .limit(1)
  
    if (error) {
      console.error(error);
      return;
    }
  
    if (
      Array.isArray(subcategories) &&
      subcategories.length > 0 &&
      Array.isArray(subcategories[0].subcategories) &&
      subcategories[0].subcategories.length > 0
    ) {
      const formatted = subcategories[0].subcategories
        .filter((sub) => sub && sub.trim() !== "")
        .map((slug) => ({
          path: slug,
          name: slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        }));
      setSubcategoriesArray(formatted);
    }
  }, [category]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts(category, "")
      setAllProducts(data)
      setTimeout(() => {
          setIsLoading(false)
      }, 1500);
    }

    getSubcategories()
    fetchProducts()
  }, [category, getSubcategories])

  const pageTitle = category
    ? `${formatTitle(category)} | SM Supermarket`
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
            first: category
          }}
        />
        <Heading size="3xl" color="#0030FF">{formatTitle(category)}</Heading>

        {category && (
          <Flex direction="row" gap={4}>
            {subcategoriesArray.map((sub, index) => (
              <Link key={index} href={`/${category}/${sub.path}`}>
                <Tag.Root size="xl" rounded="full">
                  <Tag.Label>
                    {sub.name}
                  </Tag.Label>
                </Tag.Root>
              </Link>
            ))}
          </Flex>
        )}

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
              {isLoading ? <Center>
                <Stack gap={8} p={4} alignItems="center">
                  <Spinner color="blue.500" borderWidth="4px" size="xl" />
                  <Heading>{pageTitle}</Heading>
                </Stack>
              </Center> :
                <SimpleGrid mt={4} columns={5}>
                  {allProducts.map((item, key) => (
                    <ProductCard
                      data={item}
                      key={key}
                    />
                  ))}
                </SimpleGrid>
              }

            </Stack>
          </Card.Body>
        </Card.Root>
      </Stack>
    </>
  );
}