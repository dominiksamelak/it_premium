import { Link, useResolvedPath, useMatch } from "react-router-dom";

function CustomLink({ to, children, className, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className={`${className} ${isActive ? "active" : ""}`}>
      <div className="link">
        <Link to={to} {...props}>
          {children}
        </Link>
      </div>

    </div>
  );
}

export default CustomLink;
