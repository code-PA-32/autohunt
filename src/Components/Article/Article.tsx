import { Link } from "react-router-dom";

import bg from "assets/1.png";
import bg2 from "assets/2.png";
import bg3 from "assets/3.png";
import bg4 from "assets/4.jpg";
import bg6 from "assets/6.jpeg";

import "./article.scss";

export const Article = () => {
  const pages = [
    { to: "/article/reviews", name: "Car Review", img: bg6 },
    { to: "/article/autohunt", name: "Autohunt Review", img: bg6 },
    { to: "/article/news", name: "News", img: bg },
    { to: "/", name: "FAQ", img: bg2 },
    { to: "/", name: "About Us", img: bg3 },
    { to: "/", name: "Contacts", img: bg4 },
  ];
  return (
    <main className="article_page">
      <ul className="pages_list">
        {pages.map((page) => (
          <li key={page.name} className="page">
            <Link to={page.to}>
              {page.name}
              <img src={page.img} alt={page.name} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
