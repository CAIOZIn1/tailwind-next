'use client';

import * as Select from '@radix-ui/react-select';
import { BsCheckAll } from 'react-icons/bs';

export type SelectItemProps = Select.SelectItemProps & {
  text: string
}

const SelectItem = ({text, ...props}: SelectItemProps) => {
  return (
    <Select.Item
      className='flex items-center justify-between gap-2 px-3 py-2.5 focus-visible:outline-none data-[highlighted]:bg-zinc-100'
      {...props}
    >
      <Select.ItemText className='text-black'>
          {text}
      </Select.ItemText>

      <Select.ItemIndicator>
        <BsCheckAll className='h-4 w-4 text-violet-500' />
      </Select.ItemIndicator>
    </Select.Item>
   );
}

export default SelectItem;
