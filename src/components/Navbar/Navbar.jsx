export default function Navbar({ sections }) {
  if (!sections) return <></>;
  return (
    <nav>
      <ul>
        {sections.map((section, idx) => (
          <li className="navbar-link" key={idx}>
            <a href={section.link} /*onClick={toggleNavbar}*/>
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
