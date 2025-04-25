import { Stack, Tabs } from 'expo-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const client = new QueryClient();

export default function RootLayout() {
    return(
        <QueryClientProvider client={client}>
        <Tabs>
            <Stack.Screen name = 'SignIn' options = {{title: 'Sign In'}} />
            <Stack.Screen name = 'SignUp' options = {{title: 'Sign Up'}} />
            <Stack.Screen name = 'NewPassword' options = {{title: 'New Password'}} />
            <Stack.Screen name = 'ForgotPassword' options = {{title: 'Forgot Password'}} />
            <Stack.Screen name = 'ConfirmEmail' options = {{title: 'Confirmation'}} />
            <Stack.Screen name = 'CalorieTracker' options = {{title: 'Calories'}} />
            <Stack.Screen name = 'index' options = {{title: 'Exercise'}} />
        </Tabs>
        </QueryClientProvider>
    );
}

//tabs is for icons at botttom of screen

// Figure out how to identify if its a user first time opening the app. Figure out how to redirect user to sign in screen if they haven't logged in. (Through the layout). Mess with routing in app folder for tabs at the bottom. apps should be less then 5