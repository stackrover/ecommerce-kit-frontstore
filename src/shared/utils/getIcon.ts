/* eslint-disable @typescript-eslint/no-require-imports */
export const getIconComponent = (iconName: string, lib?: string) => {
  switch (lib) {
    case 'tabler':
      return require('@tabler/icons-react')[iconName];
    case 'heroicons':
      return require('@heroicons/react/24/outline')[iconName];
    case 'lucide':
    default:
      return require('lucide-react')[iconName];
  }
};
