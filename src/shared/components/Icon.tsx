import { getIconComponent } from "../utils/getIcon";

export interface IconProps {
  name: string;
  className?: string;
  library?: "lucide" | "tabler" | "heroicons";
}

export const Icon = ({ name, className, library }: IconProps) => {
  const IconComponent = getIconComponent(name, library);

  if (!IconComponent) {
    console.warn(
      `Icon "${name}" not found in library "${library ?? "lucide"}".`
    );
    return null;
  }
  return <IconComponent className={className} />;
};
