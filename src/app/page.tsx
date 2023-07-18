"use client";
import Navbar from "./components/Navbar";
import "./Background.css";
import { useState, useCallback } from "react";
import Editor from "@monaco-editor/react";
import Pill from "./components/Pill";

function convertHtmlToJSX(html: string) {
  let jsx = html.replace(/class=/g, "className=");
  jsx = jsx.replace(/for=/g, "htmlFor=");
  // Convert inline styles to objects
  jsx = jsx.replace(/style="([^"]*)"/g, function (match: any, group: string) {
    let style = group.split(";").reduce(function (style, rule) {
      let parts = rule.split(":");
      if (parts[1]) {
        let key = parts[0].trim();
        let value = parts[1].trim();
        key = key.replace(/-./g, function (x) {
          return x[1].toUpperCase();
        }); // Convert kebab-case to camelCase
        style += key + ": '" + value + "', ";
      }
      return style;
    }, "");
    return `style={{${style}}}`;
  });
  // Handle self-closing tags
  const selfClosingTags = ["br", "hr", "img", "input", "link", "meta"];
  selfClosingTags.forEach((tag) => {
    const regex = new RegExp(`<${tag}([^>]*)>(?!</${tag}>)`, "g");
    jsx = jsx.replace(regex, function (match: string) {
      if (!match.endsWith("/>")) {
        return match.slice(0, -1) + " />";
      }
      return match;
    });
  });
  return jsx;
}

export default function Home() {
  const [code, setCode] = useState<string | undefined>("// Enter HTML here");
  const [jsx, setJSX] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard
      .writeText(jsx)
      .then(() => {
        console.log("Copying to clipboard was successful!");
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000); // hide notification after 5 seconds
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  }, [jsx]);

  function handleEditorChange(value: string | undefined) {
    if (value !== undefined) {
      setCode(value);
      let jsxCode = convertHtmlToJSX(value);
      setJSX(jsxCode);
    }
  }

  return (
    <div className="bg-black">
      <Navbar />
      <div
        style={{ width: "600px", top: "-180px" }}
        className="absolute right-[100px] z-10 h-[150px] w-[400px] rotate-[0deg] transform rounded-full bg-orange-400 blur-[150px]"
      ></div>
      <div className="absolute dotted-background h-full top-0 left-0 right-0 z-0">
        <div className="absolute left-0 right-0 bottom-0 h-[300px]"></div>
      </div>
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Pill />{" "}
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Your HTML to JSX Assistant!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Convert your HTML to JSX instantly - start by pasting your code
                below.
              </p>
            </div>

            {showNotification ? (
              <div
                aria-live="assertive"
                className="pointer-events-none fixed z-50 inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
              >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                  <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                          <p className="text-sm font-medium text-white">
                            Successfully copied!
                          </p>
                        </div>
                        <div className="ml-4 flex flex-shrink-0">
                          <button
                            type="button"
                            className="inline-flex rounded-md bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setShowNotification(false)}
                          >
                            <span className="sr-only">Close</span>
                            <svg
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="grid relative max-w-full sm:grid-cols-2 gap-4 mt-16 rounded-md p-4 border bg-neutral-900 border-zinc-900 ring-1 ring-white/10 sm:mt-24 shadow-[0_20px_207px_rgba(249,_115,_22,_0.2)]">
              <Editor
                height="60vh"
                defaultLanguage="javascript"
                defaultValue={code}
                className="rounded-full"
                theme="vs-dark"
                options={{
                  minimap: {
                    enabled: false,
                  },
                  wordWrap: "on",
                  renderValidationDecorations: "off",
                }}
                onChange={handleEditorChange}
              />
              <div className="relative">
                {" "}
                {/* added a relative positioned div */}
                <button
                  onClick={handleCopy} // Add onClick handler here
                  className="absolute p-2 bg-zinc-900 border rounded-md border-zinc-700 top-0 right-0 z-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="#fff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
                  </svg>
                </button>
                <Editor
                  height="60vh"
                  defaultLanguage="javascript"
                  value={jsx}
                  options={{
                    minimap: {
                      enabled: false,
                    },
                    wordWrap: "on",
                    renderValidationDecorations: "off",
                  }}
                  theme="vs-dark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
