import { fetchAccounts } from 'api/account';
import { fetchCurrencies } from 'api/currency';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000
    }
  }
});

async function prefetchData () {
  await queryClient.prefetchQuery('accounts', fetchAccounts);
  await queryClient.prefetchQuery('currency', fetchCurrencies);
}

type Props = {
  children: React.ReactNode;
};

function ReactQueryProvider ({ children }: Props): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  prefetchData();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;