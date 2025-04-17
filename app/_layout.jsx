import { Stack, Tabs } from 'expo-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const client = new QueryClient();

export default function RootLayout() {
    return(
        <QueryClientProvider client={client}>
        <Tabs>
            <Stack.Screen name = 'index' options = {{title: 'Exercises'}} />
        </Tabs>
        </QueryClientProvider>
    );
}

//tabs is for icons at botttom of screen