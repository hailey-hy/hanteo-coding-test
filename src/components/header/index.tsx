import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">차트</Link>
          </li>
          <li>
            <Link to="/Whook">Whook</Link>
          </li>
          <li>
            <Link to="/Event">이벤트</Link>
          </li>
          <li>
            {" "}
            <Link to="/News">뉴스</Link>
          </li>
          <li>
            <Link to="/Store">스토어</Link>
          </li>
          <li>
            {" "}
            <Link to="/Cash">충전소</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
