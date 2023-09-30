import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  About,
  Cocktail,
  Landing,
  NewsLetter,
  Error,
  SinglePageError,
} from './pages/index';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleCockTailLoader } from './pages/Cocktail';
import { action as newsLetterAction } from './pages/NewsLetter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient({
  defaultOptions: {
    stale: 1000 * 60,
  },
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        element: <Landing />,
        errorElement: <SinglePageError />,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCockTailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <NewsLetter />,
        action: newsLetterAction,
        errorElement: <SinglePageError />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
