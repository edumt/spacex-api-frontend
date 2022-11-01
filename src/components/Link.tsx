import { useEffect, useState } from "react";

const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  const [variant, setVariant] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { gtag } = window as typeof window & {
        gtag: (type: string, action: string, params: object) => void;
      };
      if (gtag !== undefined) {
        gtag("event", "optimize.callback", {
          name: "WB2lHs08QmaXLkl48d6kGg",
          callback: (value: string) => {
            setVariant(Number(value));
          },
        });
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return variant === 0 ? (
    <a
      className="text-blue-200 hover:text-blue-50 hover:underline"
      {...props}
    />
  ) : (
    <a
      className="text-blue-300 hover:text-blue-400 hover:underline"
      {...props}
    />
  );
};

export default Link;
