import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/not-found.svg';
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <p>Sorry pal, we can't seem to find the page you're looking for</p>
          <Link to="/">back to home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>something went wrong</h3>
    </Wrapper>
  );
};
export default Error;
