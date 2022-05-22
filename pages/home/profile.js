import { getLayout } from "components/layout/sideNav";

function Profile() {
  return (
    <div className='w-full h-screen flex flex-col gap-y-2 pb-28 items-center justify-center bg-sidebar text-white'>
      Under Develop
    </div>
  );
}

export default Profile;
Profile.getLayout = getLayout;
