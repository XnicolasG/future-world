import React from 'react'
import { getCustomerOrders } from 'app/services/shopify/graphql/customer';

export default async function MyAccountPage() {
  const ordersInfo = await getCustomerOrders();
  
  return (
    <div>
        <h2>Orders: ({ordersInfo.totalOrders})</h2>
      <section>
        {ordersInfo.orders?.map((order:any) => (
          <article  key={order.orderNumber}>
          <p>{order.orderNumber}</p>
          </article>
        ))}
      </section>
    </div>
  );
}