import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { init, loadRemote } from "@module-federation/enhanced/runtime";

init({
  name: "hmr_crash_example",
  remotes: [
    {
      name: "hmr_crash_example",
      entry: "http://localhost:7001/remoteEntry.js",
      alias: "hmr_crash_example",
    },
  ],
});

const Wrapper = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const remoteModule = await loadRemote<{
        mount: (root: HTMLElement) => void;
      }>("hmr_crash_example/RemoteModule");

      remoteModule?.mount(root.current!);
    })();
  }, []);

  return <div ref={root} />;
};

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>
);
