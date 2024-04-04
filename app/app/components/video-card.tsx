import { ExternalLinkIcon } from "./icons/icons";

export const VideoCard = () => {
  return (
    <div className="w-full border rounded-md flex gap-2 overflow-hidden">
      <div className="h-[150px]">
        <img
          width={400}
          className="h-full"
          src="https://i.ytimg.com/vi/A6g8CTgiW8A/maxresdefault.jpg"
          alt="video-banner"
        />
      </div>

      <div className="h-[150px] w-full flex flex-col gap-2 justify-between p-2 text-gray-600">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium text-gray-700">
            Henry Jamison - Gloria (Audio)
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Henry Jamison</p>
            <p className="text-xs">
              Uploaded: Nov 6, 2018 · 23K Views · 310 Likes
            </p>
            <div className="flex gap-2 items-center">
              <p className="text-xs">Categories:</p>
              <span className="p-1 text-gray-600 text-xs p-0 h-5 flex items-center justify-center rounded-md bg-orange-100 hover:bg-orange-200 hover:text-gray-800 cursor-pointer">
                Category
              </span>
              <span className="p-1 text-gray-600 text-xs p-0 h-5 flex items-center justify-center rounded-md bg-orange-100 hover:bg-orange-200 hover:text-gray-800 cursor-pointer">
                Category
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <a href="http">
            <ExternalLinkIcon size="sm" />
          </a>
        </div>
      </div>
    </div>
  );
};
