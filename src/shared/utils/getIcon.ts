export const getIconComponent = (iconName: string, lib?: string) => {
  switch (lib) {
    case "tabler":
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("@tabler/icons-react")[iconName];
    case "heroicons":
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("@heroicons/react/24/outline")[iconName];
    case "lucide":
    default:
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("lucide-react")[iconName];
  }
};
