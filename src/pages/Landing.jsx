import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useQuery } from '@tanstack/react-query';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const searchCockTailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const searchParameter = new URL(request.url).searchParams.get('search');
    const searchTerm = searchParameter || '';
    await queryClient.ensureQueryData(searchCockTailsQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCockTailsQuery(searchTerm));
  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
