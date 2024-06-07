import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import ProfilePage from './user/profile';
import MyMusic from './user/music';
import MyMerch from './user/merch';
import NavigationBar from '../app/components/NavigationBar';
import { getUserData } from './api/user';
import styles from '../app/components/styling/Home.module.css';

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
    <div className={styles['container']}>
      <ProfilePage userData={userData} />
      <NavigationBar />
      <MyMusic tabsData={userData} /> 
      <MyMerch tabsData={userData} /> 
    </div>
  );
}
