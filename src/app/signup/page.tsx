import { NewAccountForm } from 'app/components/SignUp'
import { GetServerSideProps } from 'next';
import React from 'react'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const cookies = req.headers.cookie;

  // Puedes hacer cualquier lógica adicional aquí, por ejemplo, verificar las cookie

  return {
    props: {
      cookies,
    },
  };
};

const page = (props: any) => {
  return <NewAccountForm {...props} />
}

export default page