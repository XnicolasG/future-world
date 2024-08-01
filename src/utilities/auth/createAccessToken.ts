import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate";
import { cookies } from "next/headers";



export const createAccessToken = async (email: string, password: string) => {
    try {
        const cookiesStore = cookies()
        const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
        const { customerAccessTokenCreate }: {
            customerAccessTokenCreate: {
              customerAccessToken: {
                accessToken: string
                expiresAt: string
              }
            }
          } = await graphqlClient.request(customerAccessTokenCreateMutation, {
            'email': email,
            'password': password
        })

        const {accessToken, expiresAt} = customerAccessTokenCreate?.customerAccessToken

        if (accessToken) {
            cookiesStore.set('accessToken', accessToken, {
                path: '/',
                expires: new Date(expiresAt),
                httpOnly: true,
                sameSite: 'strict', //cookie solo puede ser utilizada en nuestro sitio
            })
            console.log('signUp Successfull');
            return accessToken
        }
    } catch (error) {
        console.log(error + ': createAccessToken');

    }
}