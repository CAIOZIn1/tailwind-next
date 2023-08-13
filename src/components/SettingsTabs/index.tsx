'use client';

import * as Tabs from '@radix-ui/react-tabs';
import TabItem from './TabItem';
import {useState} from 'react';

const SettingsTabs = () => {
  const tabItemsContent = [
    {
      value: 'tab1',
      title: 'My details'
    },
    {
      value: 'tab2',
      title: 'Profile'
    },
    {
      value: 'tab3',
      title: 'Password'
    },
    {
      value: 'tab4',
      title: 'Team'
    },
    {
      value: 'tab5',
      title: 'Plan '
    },
    {
      value: 'tab6',
      title: 'Billing'
    },
    {
      value: 'tab7',
      title: 'Email'
    },
    {
      value: 'tab8',
      title: 'Notifications '
    },
    {
      value: 'tab9',
      title: 'Integrations'
    },
    {
      value: 'tab10',
      title: 'API'
    },
  ]

  return (
    <>
      <Tabs.Root>
        <Tabs.List className='mt-6 flex w-full items-center gap-4 border-b border-zinc-200'>

          {tabItemsContent.map((args) => (
            <TabItem value={args.value} title={args.title} key={args.value}/>
          ))}
        </Tabs.List>
      </Tabs.Root>

    </>
   );
}

export default SettingsTabs;
