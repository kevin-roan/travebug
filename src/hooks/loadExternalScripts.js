import { useEffect } from "react";

const useLoadScripts = (scripts) => {
  useEffect(() => {
    const scriptElements = scripts.map((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    return () => {
      scriptElements.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, [scripts]);
};

export default useLoadScripts;
