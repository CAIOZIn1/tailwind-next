'use client';

import * as Selected from '@radix-ui/react-select';
import {BiChevronDown} from 'react-icons/bi';
import {ReactNode} from 'react';

export interface SelectProps extends Selected.SelectProps {
  children: ReactNode,
  placeholder: string
}

const Select = ({children, placeholder, ...props}: SelectProps) => {
  return (
    <Selected.Root {...props}>
      <Selected.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-visible:outline-none data-[placeholder]:text-zinc-500">
        <Selected.Value placeholder={placeholder} className="text-black" />
        <Selected.Icon>
          <BiChevronDown className='h-5 w-5 text-zisnc-500'/>
        </Selected.Icon>
      </Selected.Trigger>

      <Selected.Portal>
        <Selected.Content side='bottom' position='popper' sideOffset={8} className='z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden shadow-sm'>
          <Selected.Viewport>
            {children}
          </Selected.Viewport>
        </Selected.Content>
      </Selected.Portal>
    </Selected.Root>
   );
}

export default Select;
