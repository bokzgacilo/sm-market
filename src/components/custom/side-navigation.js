import { supabase } from "@/helper/supabase";
import { Flex, Icon, Image, Separator, Stack, Text, Heading} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";

export default function SideNavigation() {
  const [categoriesArray, setCategoriesArray] = useState([])

  const getAllCategories = async () => {
    let {data: categories, error} = await supabase
      .from('categories')
      .select('name, slug')

    if (error) {
      console.error(error);
      return;
    }

    if (categories) {
      const formatted = categories.map((cat) => ({
        icon: `/images/nav-icons/${cat.slug}.webp`,
        label: cat.name,
        path: cat.slug,
      }));

      setCategoriesArray(formatted);
      console.log(formatted);
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  return(
    <Stack
      p={4}
      height="90dvh"
      backgroundColor="#fff"
      w="350px"
    >
      <Heading mt={8} color="#0030FF">Browse Products</Heading>
      <Separator my={4} />
      <Heading mb={4} size="sm">Shop by Category</Heading>
      <Stack
        gap={4}
        overflowY="auto"
        flex={1}
      >
        {
          categoriesArray.map((item) => (
            <Link
              key={item.label}
              href={`/${item.path}`}
            >
              <Flex
                alignItems="center"
                px={4}
                cursor="pointer"
              >
                <Image mr={6} alt={item.label} width="40px" height="40px" src={item.icon} />
                <Text maxW="130px" textAlign="left" fontSize="14px" fontWeight="semibold" mr="auto">{item.label}</Text>
                <Icon size="md" color="#0030FF">
                  <GoChevronRight />
                </Icon>
              </Flex>
            </Link>
          ))
        }
      </Stack>
    </Stack>
  )
}