import { Flex, Text } from '@chakra-ui/react';

type FooterProps = {
  h: string;
};

const Footer = ({ h }: FooterProps) => (
  <Flex
    as="footer"
    marginY={2}
    h={h}
    justifyContent="center"
    alignItems="center"
  >
    <Text fontSize="lg">Biproxi Take-home by Nick Papadakis</Text>
  </Flex>
);

export default Footer;
