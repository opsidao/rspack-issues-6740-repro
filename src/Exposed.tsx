import { createRoot } from "react-dom/client";
import App from "./App";

export const mount = (container: HTMLElement) => {
  createRoot(container).render(<App />);
};
