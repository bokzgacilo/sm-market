import { Flex, Icon, Image, Separator, Stack, Text, Heading} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoChevronRight } from "react-icons/go";

const nav_links = [
  {
    icons: "/images/nav-icons/order-again.webp",
    label: "Order Again",
    path: "order-again"
  },
  {
    icons: "/images/nav-icons/only-in-sm.webp",
    label: "Order in SM Markets",
    path: "order-in-sm-markets"
  },
  {
    icons: "/images/nav-icons/40th-anniversary.webp",
    label: "40th Anniversary",
    path: "40th-anniversary"
  },
  {
    icons: "/images/nav-icons/eco-choice.webp",
    label: "Eco Choice",
    path: "eco-choice"
  },
  {
    icons: "/images/nav-icons/watts-japan.webp",
    label: "Watts Japan",
    path: "watts-japan"
  },
  {
    icons: "/images/nav-icons/miniso.webp",
    label: "Miniso",
    path: "miniso"
  },
  {
    icons: "/images/nav-icons/promo.webp",
    label: "Promos",
    path: "promos"
  },
  {
    icons: "/images/nav-icons/fresh-produce.webp",
    label: "Fresh Produce",
    path: "fresh-produce"
  },
  {
    icons: "/images/nav-icons/fresh-meat.webp",
    label: "Fresh Meats & Seafood",
    path: "fresh-meats-and-seafood"
  },
  {
    icons: "/images/nav-icons/frozen-goods.webp",
    label: "Frozen Goods",
    path: "frozen-goods"
  },
  {
    icons: "/images/nav-icons/ready-to-heat.webp",
    label: "Ready To Heat & Eat Items",
    path: "ready-to-heat-and-eat-items"
  },
  {
    icons: "/images/nav-icons/ready-to-cook.webp",
    label: "Ready to Cook",
    path: "ready-to-cook"
  },
  {
    icons: "/images/nav-icons/chilled-dairy.webp",
    label: "Chilled & Dairy Items",
    path: "chilled-and-dairy-items"
  },
  {
    icons: "/images/nav-icons/bakery.webp",
    label: "Bakery",
    path: "bakery"
  },
  {
    icons: "/images/nav-icons/international-goods.webp",
    label: "International Goods",
    path: "international-goods"
  },
  {
    icons: "/images/nav-icons/pantry.webp",
    label: "Pantry",
    path: "pantry"
  },
  {
    icons: "/images/nav-icons/snacks.webp",
    label: "Snacks",
    path: "snacks"
  },
  {
    icons: "/images/nav-icons/health-beauty.webp",
    label: "Health & Beauty",
    path: "health-and-beauty"
  },
  {
    icons: "/images/nav-icons/babies-kids.webp",
    label: "Babies & Kids",
    path: "babies-and-kids"
  },
  {
    icons: "/images/nav-icons/home-care.webp",
    label: "Home Care",
    path: "home-care"
  },
  {
    icons: "/images/nav-icons/pet-care.webp",
    label: "Pet Care",
    path: "pet-care"
  },
  {
    icons: "/images/nav-icons/hardware.webp",
    label: "DIY/Hardware",
    path: "diy-hardware"
  },
  {
    icons: "/images/nav-icons/home-appliance.webp",
    label: "Home Appliances & Essentials",
    path: "home-appliances-and-essentials"
  },
  {
    icons: "/images/nav-icons/health-hygiene.webp",
    label: "Health & Hygiene Essentials",
    path: "health-and-hygiene-essentials"
  }
];

export default function SideNavigation() {
  return(
    <Stack
      p={4}
      height="90dvh"
    >
      <Heading mt={8} color="#0030FF">Browse Products</Heading>
      <Separator my={4} />
      <Heading mb={4} size="sm">Shop by Category</Heading>
      <Stack
        gap={4}
        overflowY="auto"
        flex={1}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          }   // Firefox
        }}
      >
        {
          nav_links.map((item) => (
            <Link
              key={item.label}
              href={`/category/${item.path}`}
            >
              <Flex
                alignItems="center"
                px={4}
                cursor="pointer"
              >
                <Image mr={6} width="40px" height="40px" src={item.icons} />
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