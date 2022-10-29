const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  return (
    <a
      className="text-blue-600 hover:text-blue-800 hover:underline"
      {...props}
    />
  );
};

export default Link;
