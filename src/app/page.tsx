import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import React from 'react'

export default function HmePage() {
  return (
    <div>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  )
}
