import { SquirrelIcon } from "../icons/icons";

export const Header = () => {
  return (
    <div className="border-b h-20 w-full flex justify-between p-8 items-center">
      <div>
        <p className="text-3xl font-medium">
          Save<span className="text-orange-500">Tube</span>
        </p>
      </div>
      <div>
        <button className="cursor-pointer">
          <SquirrelIcon size="xl" />
        </button>
      </div>
    </div>
  );
};
