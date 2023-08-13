'use client';

import SettingsTabs from "@/components/SettingsTabs";
import * as Input from '@/components/Input';
import * as FileInput from '@/components/Form/FileInput';

import {HiOutlineMail} from 'react-icons/hi';
import {LiaBoldSolid } from 'react-icons/lia';
import {ImItalic } from 'react-icons/im';
import Select from "@/components/Form/Select";
import SelectItem from "@/components/Form/Select/SelectItem";
import { BiLink } from "react-icons/bi";
import { BsList, BsListUl } from "react-icons/bs";


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
              <FileInput.Root className="flex items-start gap-5">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
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
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil"/>
              <SelectItem value="us" text="United States"/>
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-form pt-7 pb-2 items-center">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700">
                Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)"/>
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)"/>
            </Select>
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
            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" defaultChecked text="Normal text"/>
                  <SelectItem value="md" text="Markdown"/>
                </Select>

                <div className="flex items-center gap-1">
                  <button type="button" className="nl-auto p-2 rounded-md hover:bg-zinc-50">
                    <LiaBoldSolid className='h-4 w-4 text-zinc-500'/>
                  </button>
                  <button type="button" className="nl-auto p-2 rounded-md hover:bg-zinc-50">
                    <ImItalic className='h-4 w-4 text-zinc-500'/>
                  </button>
                  <button type="button" className="nl-auto p-2 rounded-md hover:bg-zinc-50">
                    <BiLink className='h-4 w-4 text-zinc-500'/>
                  </button>
                  <button type="button" className="nl-auto p-2 rounded-md hover:bg-zinc-50">
                    <BsList className='h-4 w-4 text-zinc-500'/>
                  </button>
                  <button type="button" className="nl-auto p-2 rounded-md hover:bg-zinc-50">
                    <BsListUl className='h-4 w-4 text-zinc-500'/>
                  </button>
                </div>
              </div>

              <textarea id="bio" defaultValue="I'm a Devloper..." className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-400" />
            </div>
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
              <FileInput.Root>
                <FileInput.Trigger />
                <FileInput.FileList />
                <FileInput.Control multiple/>
              </FileInput.Root>
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
