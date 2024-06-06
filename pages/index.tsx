import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import ProfilePage from './user/profile';
import { getUserData } from './api/user';

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const userData = await getUserData();
    console.log("User data fetched in getStaticProps of index.tsx:", userData);
    return { props: { userData } };
  } catch (error) {
    console.error("Error in getStaticProps of index.tsx:", error);
    return { props: { userData: null } };
  }
};

export default function Home({
  userData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!userData) {
    return <div>Error loading user data</div>;
  }

  console.log("User data in Home component:", userData);

  return (
    <div>
      <h1>Welcome to my website!</h1>
      <ProfilePage userData={userData} />
    </div>
  );
}
