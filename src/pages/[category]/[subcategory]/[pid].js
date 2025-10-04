// pages/category/[type].js
import { useRouter } from "next/router";
import { Heading, Container, Stack, Text, Card, Button, SimpleGrid, Image, Center, Spinner, Box, Flex, Separator } from "@chakra-ui/react";
import Head from "next/head";
import CustomBreadcrumb from "@/components/custom/custom-breadcrumb";
import formatTitle from "@/helper/slug";
import { useState } from "react";
import { supabase } from "@/helper/supabase";
import Slider from "react-slick";


export default function ProductPage() {
  const router = useRouter();
  const { category, subcategory, pid } = router.query;
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getProduct = async () => {
    let { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("slug", pid)
      .limit(1)

    if (error) {
      return
    } else {
      setProduct(product[0])
      setIsLoading(false)
    }
  }

  useState(() => {
    getProduct()
  }, [router])

  const pageTitle = pid
    ? `${formatTitle(pid)} | SM Supermarket`
    : "Category | SM Supermarket";

  const settings = {
    customPaging: function (i) {
      return (
        <Image
          width="100px"
          height="100px"
          src={product.images[i]}
          alt={`thumb-${i}`}
          objectFit="contain"
          border="1px solid lightgray"
        />
      );
    },
    arrows: true,
    dotsClass: "slick-dots slick-thumb",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
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
            second: subcategory,
            third: pid
          }}
        />
        <Card.Root>
          <Card.Body
            p={4}
          >
            {isLoading ? <Center>
              <Stack gap={8} p={4} alignItems="center">
                <Spinner color="blue.500" borderWidth="4px" size="xl" />
                <Heading>{pageTitle}</Heading>
              </Stack>
            </Center> :
              <SimpleGrid p={4} templateColumns="1fr 1fr">
                <Stack placeItems="center">
                  <Box w="100%" maxW="500px" className="slider-container">
                    <Slider {...settings}>
                      {product.images?.map((image, key) => (
                        <Center key={key}>
                          <Image w="100%" alt={`Carousel Image ${key + 1}`} height="500px" objectFit="contain" src={image} />
                        </Center>
                      ))}
                      {/* <div><h1>2</h1></div>
                      <div><h1>3</h1></div>
                      <div><h1>4</h1></div> */}
                    </Slider>
                  </Box>

                  {/* <Image src={product.images[0]} height="400px" width="auto" objectFit="contain" /> */}
                </Stack>
                <Stack>
                  <Heading size="2xl">{pageTitle}</Heading>
                  <Text>{product.description}</Text>
                  <Heading py={4} size="5xl">{product.price}</Heading>
                  <Separator mt="auto" />
                  <Flex gap={4}>
                    <Button backgroundColor="#0030FF" size="xl">Add To Cart</Button>
                    <Button size="xl">Add To Wishlist</Button>
                  </Flex>
                </Stack>
              </SimpleGrid>
            }
          </Card.Body>
        </Card.Root>
      </Stack>
    </>
  );
}
