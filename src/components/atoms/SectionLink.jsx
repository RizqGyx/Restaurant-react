import { useLocation, useNavigate } from "react-router-dom";

function SectionLink({ to, children, className = "", onNavigate }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = (event) => {
    event.preventDefault();
    onNavigate?.();

    if (pathname === "/") {
      document.getElementById(to)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/#${to}`);
    } else {
      navigate("/", { state: { scrollTo: to } });
    }
  };

  return (
    <a href={`/#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export default SectionLink;
