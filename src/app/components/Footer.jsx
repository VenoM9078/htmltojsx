export default function Footer() {
  return (
    <div
      style={{ zIndex: "999999 !important" }}
      className="relative bg-transparent "
    >
      <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto py-4 ">
        <div className="text-gray-400 text-sm text-center ">
          © 2023 - HTMLtoJSX. All rights reserved.
        </div>
        <div className="text-gray-400 text-sm text-center">
          Created by{" "}
          <a
            href="https://github.com/VenoM9078"
            target="_blank"
            rel="noreferrer"
            className="underline cursor-pointer font-bold"
          >
            Muhammad Roushan
          </a>
        </div>
      </footer>
    </div>
  );
}
