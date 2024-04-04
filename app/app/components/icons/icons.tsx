export interface SVGIconProps {
  className?: string;
  strokeWidth?: number;
  color?: string;
  onClick?: () => void;
  size?:
    | "default"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "poster";
}

const getHeightWidthBySize = (
  size: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "poster"
) => {
  let dimensions = { height: 24, width: 24 };

  switch (size) {
    case "xs":
      dimensions = { height: 14, width: 14 };
      break;
    case "sm":
      dimensions = { height: 18, width: 18 };
      break;
    case "md":
      dimensions = { height: 22, width: 22 };
      break;
    case "lg":
      dimensions = { height: 26, width: 26 };
      break;
    case "xl":
      dimensions = { height: 30, width: 30 };
      break;
    case "2xl":
      dimensions = { height: 34, width: 34 };
      break;
    case "3xl":
      dimensions = { height: 38, width: 38 };
      break;
    case "poster":
      dimensions = { height: 70, width: 70 };
      break;
    case "default":
      dimensions = { height: 24, width: 24 };
      break;
  }

  return dimensions;
};

export const SquirrelIcon = (props: SVGIconProps) => {
  const {
    strokeWidth = 2,
    color = "currentColor",
    className = "",
    onClick = () => {},
    size = "default",
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getHeightWidthBySize(size).width}
      height={getHeightWidthBySize(size).height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-squirrel ${className}`}
      onClick={onClick}
    >
      <path d="M15.236 22a3 3 0 0 0-2.2-5" />
      <path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
      <path d="M18 13h.01" />
      <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
    </svg>
  );
};

export const SquarePlusIcon = (props: SVGIconProps) => {
  const {
    strokeWidth = 2,
    color = "currentColor",
    className = "",
    onClick = () => {},
    size = "default",
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getHeightWidthBySize(size).width}
      height={getHeightWidthBySize(size).height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-square-plus ${className}`}
      onClick={onClick}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
};

export const ExternalLinkIcon = (props: SVGIconProps) => {
  const {
    strokeWidth = 2,
    color = "currentColor",
    className = "",
    onClick = () => {},
    size = "default",
  } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={getHeightWidthBySize(size).width}
      height={getHeightWidthBySize(size).height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-external-link ${className}`}
      onClick={onClick}
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
};
