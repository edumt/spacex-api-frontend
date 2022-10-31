const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  return (
    <a
      className="text-blue-200 hover:text-blue-50 hover:underline"
      {...props}
    />
  );
};

export default Link;
