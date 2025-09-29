import { Flex, Icon, Image, Separator, Stack, Text, Heading, Input, Button, SimpleGrid, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";

export default function FooterNavigation() {
  return (
    <Stack
      mt="auto"
      px={12}
      py={12}
      backgroundColor="#0030FF"
      color="#fff"
    >
      <SimpleGrid
        templateColumns="50% 50%"
      >
        <Stack
          flex={1}
          gap={4}
        >
          <Heading>Get awesome exclusives and more deals when you subscribe!</Heading>
          <Flex direction="row" alignItems="center" gap={4}>
            <Input size="xl" placeholder="Enter your email address" backgroundColor="#fff" type="email" />
            <Button size="xl" backgroundColor="#fff" color="#0030FF" fontWeight="semibold">Subscribe</Button>
          </Flex>
        </Stack>
        <Stack
          gap={4}
          alignItems="flex-end"
        >
          <Heading>Follow Us</Heading>
          <Flex direction="row" alignItems="center" gap={2}>
            <Icon size="2xl" color="#fff">
              <FaSquareFacebook />
            </Icon>
            <Icon size="2xl" color="#fff">
              <FaInstagram />
            </Icon>
          </Flex>
        </Stack>
      </SimpleGrid>
      <HStack gap={4} mt={12}>
        <Link href="/terms-and-conditions">
          <Heading size="md" minW="300px">Terms & Conditions</Heading>
        </Link>
        <Link href="/my-account">
          <Heading size="md">My Account</Heading>
        </Link>
       
      </HStack>
      <HStack gap={4}>
        <Link href="/privacy-policy">
          <Heading size="md" minW="300px">Privacy Policy</Heading>
        </Link>
         <Link href="/faqs">
          <Heading size="md">FAQS</Heading>
        </Link>
      </HStack>
      <HStack gap={4}>
        <Link href="/cookies-policy">
          <Heading size="md" minW="300px">Cookies Policy</Heading>
        </Link>
        <Link href="/contact-us">
          <Heading size="md">Contact Us</Heading>
        </Link>
        <Heading size="xs" ml="auto">Copyright © 2025 Supervalue, Inc. All rights reserved.</Heading>
      </HStack>
    </Stack>
  )
}