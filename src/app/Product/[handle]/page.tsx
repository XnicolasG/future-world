
'use client'

import { useParams, useSearchParams } from "next/navigation"

const page = () => {
  const params = useParams()
  const searchParams = useSearchParams()
  const id = searchParams.get('id') 
  console.log(id);
  
    return (
    <div>page</div>
  )
}

export default page