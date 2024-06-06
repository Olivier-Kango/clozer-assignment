// types/UserData.ts

export interface UserData {
  uid: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  links: any;
  membership_nft: any;
  is_launch_idol: boolean;
  theme: string;
  custom_theme: CustomTheme;
  display_name: DisplayName;
  mobile_theme: MobileTheme;
}

interface CustomTheme {
  image: string;
  visibility: string;
}

interface DisplayName {
  image: string;
  text: string;
  visibility: string;
}

interface MobileTheme {
  hero: string;
  footer: string;
}
