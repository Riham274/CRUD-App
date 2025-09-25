import { Link } from "react-router";

function Sidebar() {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link to={'/products'}>get all products</Link>
        </li>
        <li>
          <a href="#">get all cateogries</a>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
