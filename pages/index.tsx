import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import ProfilePage from './user/profile';
import MyMusic from './user/music';
import { getUserData } from './api/user';

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const userData = await getUserData();
    return { props: { userData } };
  } catch (error) {
    return { props: { userData: null } };
  }
};

export default function Home({
  userData,
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
