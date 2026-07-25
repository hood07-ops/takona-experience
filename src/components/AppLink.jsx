function AppLink({ to, children, className }) {
  const handleClick = (event) => {
    event.preventDefault();
    if (window.location.pathname !== to) {
      window.history.pushState({}, "", to);
      window.dispatchEvent(new Event("app:navigate"));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a className={className} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default AppLink;
