import { LogOut } from 'lucide-react'
import { Button } from '../Button'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/CAIOZIn1.png"
        className="h-10 w-10 rounded-full"
        alt="image-profile"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Caio Borges Sella
        </span>
        <span className="truncate text-sm text-zinc-500">
          sellacaio@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
