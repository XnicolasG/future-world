'use server'

import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { createAccessToken } from "app/utilities/auth/createAccessToken";
import { redirect} from "next/navigation";

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
        const {customerCreate } = await graphqlClient.request(createUserMutation, variables)
        const {customerUserErrors, customer} = customerCreate
        console.log(customerCreate);
        console.log(customer);
        console.log(customer.firstName);
      
        if(customer?.firstName){
            await createAccessToken(formDataObject.email as string, formDataObject.password as string)
            console.log(formDataObject);

            console.log("Redireccionando a /store");
            return{redirect: '/store'}  
        }
    } catch (error) {
        console.log(error + ': handleCreateUser');
        
    }
}