import SettingsTabs from "@/components/SettingsTabs";
import * as Input from '@/components/Input';

import {HiOutlineMail} from 'react-icons/hi';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col ">

        <div className="flex flex-row justify-between pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update yout photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200">
          <div className="grid gap-3 grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700">
                Name
            </label>

            <div className="grid gap-6 grid-cols-2">
              <Input.InputRoot>
                <Input.InputControl id='firstName' defaultValue='Caio'/>
              </Input.InputRoot>

              <Input.InputRoot>
                <Input.InputControl defaultValue='Sella' />
              </Input.InputRoot>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-7 pb-2 items-center">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700">
                Email address
            </label>

            <div className="grid gap-6 grid-cols-2">
              <Input.InputRoot>
                <Input.InputPrefix>
                  <HiOutlineMail className='h-5 text-zinc-500 w-5' />
                </Input.InputPrefix>

                <Input.InputControl className="truncate focus-visible:outline-none" id='email' defaultValue='sellacaio3@gmail.com'/>
              </Input.InputRoot>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-7 pb-2 items-center">
            <label
              htmlFor="yourPhoto"
              className="text-sm font-medium text-zinc-700">
                Your photo
                <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                  This will be display on your profile
                </span>
            </label>
            <div></div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-7 pb-2 items-center">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700">
                Role
            </label>

            <Input.InputRoot>
              <Input.InputControl id='role' defaultValue='CTO'/>
            </Input.InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-7 pb-2 items-center">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700">
                Country
            </label>
            <div></div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-7 pb-2 items-center">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700">
                Timezone
            </label>
            <div></div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-7 pb-2 items-center">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700">
                Bio
                <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                  Write a short introduction.
                </span>
            </label>
            <div></div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-7 pb-2 items-center">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700">
                Portifolio projects
                <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                  Share a few snippets of your work.
                </span>
            </label>
            <div></div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
                type="button"
                className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc300 text-zinc-700 hover:bg-zinc-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="settings"
                className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
              >
                Save
              </button>
          </div>
        </form>
      </div>
    </>
  )
}
