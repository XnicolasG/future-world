import { validateAccessToken } from 'app/utilities/auth/validateAccessToken'
import React from 'react'

export const dynamic = 'force-dynamic'

export default async function MyAccountPage() {
  const customer = await validateAccessToken();

  return (
    <div>
      <section>
        <h1>Bienvenido {customer?.firstName}</h1>
        <p>email: {customer?.email}</p>
      </section>
    </div>
  );
}