export default function Pill() {
  return (
    <a
      href="https://github.com/VenoM9078/htmltojsx"
      className="inline-flex mb-6 justify-between items-center  py-1 px-1 pr-4 text-sm text-white bg-zinc-500 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-zinc-800  hover:bg-zinc-700"
    >
      <span className="text-xs bg-gradient-to-tr from-orange-500 to-orange-300 rounded-full text-white px-4 py-1.5 mr-3">
        New
      </span>{" "}
      <span className="text-sm font-medium">
        Want to contribute? You can do that{" "}
        <span className="underline">here</span>
      </span>
      <svg
        aria-hidden="true"
        className="ml-2 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}
