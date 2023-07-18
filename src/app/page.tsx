"use client";
import Navbar from "./components/Navbar";
import "./Background.css";
import { useState } from "react";
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
  const [code, setCode] = useState(
    '// Enter valid HTML here..'
  );
  const [jsx, setJSX] = useState("");

  function handleEditorChange(value, ev) {
    setCode(value);
    let jsxCode = convertHtmlToJSX(value);
    setJSX(jsxCode);
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

            <div className="grid grid-cols-2 gap-4 mt-16 rounded-md p-4 border bg-neutral-900 border-zinc-900 ring-1 ring-white/10 sm:mt-24 shadow-[0_20px_207px_rgba(249,_115,_22,_0.2)]">
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
  );
}
