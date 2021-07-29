import { Flex, Heading, Box, useColorModeValue } from '@chakra-ui/react';

import ColorToggle from './ColorToggle';

type HeaderProps = {
  h: string;
};

const Header = ({ h }: HeaderProps) => {
  const bg = useColorModeValue('linkedin.700', 'linkedin.900');

  return (
    <Flex h={h} bg={bg} justify="right" alignItems="center" pl="1rem">
      <Flex align="center">
        <Heading>To-do List</Heading>
        <Box flex={1} ml={1}>
          <ColorToggle />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
