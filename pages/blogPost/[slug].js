import React from 'react'
import { useRouter } from 'next/router'
function Slug() {
    const router = useRouter()
    const {slug} = router.query
  return (
    <div>
      {slug}
    </div>
  )
}

export default Slug
