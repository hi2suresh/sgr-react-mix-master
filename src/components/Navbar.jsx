import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/Navbar';
const StyledBtn = styled.button`
  background: red;
  color: white;
  font-size: 2rem;
  padding: 1rem;
`;
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/newsletter">
            NewsLetter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
