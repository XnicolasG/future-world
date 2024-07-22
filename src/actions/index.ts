'use server'

import { GraphQLClientSingleton } from "app/graphql";
import { createCartMutation } from "app/graphql/mutations/createCartMutation";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { createAccessToken } from "app/utilities/auth/createAccessToken";
import { validateAccessToken } from "app/utilities/auth/validateAccessToken";
import { Quando } from "next/font/google";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleCreateUser = async (formData: FormData) => {
    try {
        const formDataObject = Object.fromEntries(formData)
        delete formDataObject["password_confirmation"]
        const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
        const variables = {
            input: {
                ...formDataObject,
                phone: '+57' + formDataObject.phone
            }
        }
        const { customerCreate } = await graphqlClient.request(createUserMutation, variables)
        const { customerUserErrors, customer } = customerCreate
        console.log(customerCreate);
        console.log(customer);
        console.log(customer.firstName);

        if (customer?.firstName) {
            await createAccessToken(formDataObject.email as string, formDataObject.password as string)
            console.log(formDataObject);

            console.log("Redireccionando a /store");
            return { redirect: '/store' }
        }
    } catch (error) {
        console.log(error + ': handleCreateUser');

    }
}

export const handleLogin = async (formData: FormData) => {
    const fromDataObject = Object.fromEntries(formData);
    const accessToken = await createAccessToken(fromDataObject.email as string, fromDataObject.password as string)
    if (accessToken) {
        return { redirect: '/store' }
    }

}

export const handleCreateCart = async (items: CartItem[]) => {
    const cookiesStore = cookies()
    const accesToken = cookiesStore.get('accessToken')?.value as string

    if (!accesToken) redirect('/login')

    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const customer = await validateAccessToken()
    const variables = {
        input: {
            buyerIdentity: {
                customerAccessToken: accesToken,
                email: customer?.email
            },
            lines: items.map(item => ({
                merchandiseId: item.merchandiseId,
                quantity: item.quantity
            }))
        }
    }

    const { cartCreate }: {
        cartCreate?: {
            cart?: {
                checkoutUrl: string
            }
        }
    } = await graphqlClient.request(createCartMutation, variables)

    return cartCreate?.cart?.checkoutUrl
}