import { ComponentProps } from 'react';

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

type inputControlProps = ComponentProps<'input'>

export function InputControl(props: inputControlProps) {
  return (
    <input
      className='flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 focus-visible:outline-none'
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
   );
}
