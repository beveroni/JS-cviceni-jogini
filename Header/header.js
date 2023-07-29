export const Header = (props) => {
  const { title, links } = props;
  return `<header>
    <h1 class="site-title">${title}</h1>
    <nav>
      ${links.map((link) => `<a href="#">${link}</a>`).join('')}
    </nav>
  </header>
`;
};
