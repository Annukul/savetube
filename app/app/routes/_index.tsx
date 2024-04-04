import type { MetaFunction } from "@remix-run/node";
import { ExternalLinkIcon, SquarePlusIcon } from "~/components/icons/icons";
import { Header } from "~/components/layout/header";
import { VideoCard } from "~/components/video-card";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif" }}
      className="flex flex-col items-center gap-6"
    >
      <Header />
      <div className="w-[80%] flex flex-col gap-6">
        <div className="w-full flex gap-2 items-center">
          <p className="text-sm font-medium text-gray-600">Categories:</p>
          <div className="w-[92%] flex gap-2 overflow-x-auto">
            {new Array(20).fill(0).map((_, i) => {
              return (
                <span
                  key={i}
                  className="p-1 text-gray-600 text-xs p-0 h-5 flex items-center justify-center rounded-md bg-orange-100 hover:bg-orange-200 hover:text-gray-800 cursor-pointer"
                >
                  Category
                </span>
              );
            })}
          </div>
        </div>
        <div className="w-full flex gap-4 justify-between">
          <div className="h-screen flex flex-col gap-4 w-[65%] p-2">
            <div className="w-full flex items-center justify-between">
              <p
                className="text-xl font-medium underline decoration-orange-500 underline-offset-2
"
              >
                Saved videos
              </p>
              <button>
                <SquarePlusIcon className="text-orange-500" />
              </button>
            </div>
            <div className="w-full flex flex-col gap-4">
              {new Array(3).fill(0).map((_, i) => {
                return <VideoCard key={i} />;
              })}
            </div>
          </div>
          <div className="h-screen w-[35%] border flex flex-col gap-4 p-2 rounded-md">
            <p
              className="text-sm underline decoration-orange-500 underline-offset-2
"
            >
              Recently opened
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
