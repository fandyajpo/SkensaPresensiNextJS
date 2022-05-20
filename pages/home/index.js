import { getLayout } from "components/layout/sideNav";
import Profile from "components/card/Profile";
import Activity from "components/card/Activity";

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-y-2'>
      <Profile />
      <Activity />
    </div>
  );
};

export default Home;
Home.getLayout = getLayout;
