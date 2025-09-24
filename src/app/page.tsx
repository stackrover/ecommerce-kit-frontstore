import { Icon } from '@/shared/components/Icon';

export default function Home(propss) {
  return (
    <div className="">
      <Icon name="LeafIcon" className="h-6 w-6 text-blue-500" />
      <Icon name="BookOpenIcon" library="heroicons" className="h-6 w-6 text-green-500" />
      <Icon name="IconBrandArc" library="tabler" className="h-6 w-6 text-red-500" />
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
    </div>
  );
}
