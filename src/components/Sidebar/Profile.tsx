import { MdOutlineLogout } from 'react-icons/md';

const Profile = () => {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://avatars.githubusercontent.com/u/100611416?v=4"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col mt-4 truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Caio Borges Sella
        </span>

        <span className="truncate text-sm text-zinc-500">
          sellacaio3@gmail.com
        </span>
      </div>
      <button type="button" className="nl-auto p-2 rounded-md hover:bg-zinc-50">
        <MdOutlineLogout className='h-5 w-5 text-zinc-500'/>
      </button>
    </div>
   );
}

export default Profile;
