import { getLayout } from "components/layout/sideNav";

import Profile from "components/card/Profile";
import Activity from "components/card/Activity";
import Statistic from "components/card/Statistic";
import AbsenButton from "components/card/AbsenButton";
import RecentActivity from "components/card/RecentActivity";

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-y-2'>
      <Profile />
      <div>
        <div className='px-2 pb-2'>
          <Activity />
        </div>
        <AbsenButton />
        <RecentActivity />
      </div>
      <Statistic />
    </div>
  );
};

export default Home;
Home.getLayout = getLayout;
