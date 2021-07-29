import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorToggle = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      size="lg"
      fontSize="lg"
      color="current"
      variant="ghost"
      aria-label={`Switch to ${text} mode`}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  );
};

export default ColorToggle;
