import { GraphQLClient } from "graphql-request";

const url = 'https://murieji.us-east-a.ibm.stepzen.net/api/open-lambkin/graphql';

const apiKey = process.env.EXPO_PUBLIC_GAK;

const client = new GraphQLClient(url, {headers: {"Authorization": `apikey ${apiKey}`},});

export default client;
