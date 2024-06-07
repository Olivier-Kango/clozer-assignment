import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import ProfilePage from './user/profile';
import MyMusic from './user/music';
import { getUserData } from './api/user';
import { getTabsData } from './api/tabs'; 

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const userData = await getUserData();
    const tabsData = await getTabsData();
    return { props: { userData } };
  } catch (error) {
    return { props: { userData: null } };
    return { props: { userData: null, tabsData: [] } };
  }
};

export default function Home({
  userData,
  tabsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!userData) {
    return <div>Error loading user data</div>;
  }

  return (
    <div>
      <ProfilePage userData={userData} />
      <MyMusic tabsData={userData} /> 
    </div>
  );
}
