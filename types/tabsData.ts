export interface TabsData {
  links: any;
  artists: any;
  coverURL: string;
  id: string;
  title: string;
  index: number;
  created_at: number;
  updated_at: number;
  deleted_at: number;
  type: string;
  visible: boolean;
  path_name: string;
  items: MusicItem[] | EventItem[] | PodcastItem[] | RosterItem[] | ShopItem[];
  external_url: string;
}

interface ItemDetails {
  Album: string;
  Artists: string[];
  CoverURL: string;
  IsPreSave: boolean;
  Links: Link[];
  ReleaseDate: number;
  Timezone: number;
  Title: string;
}

interface MusicItem {
  id: string;
  details: ItemDetails;
  index: number;
  created_at: number;
  updated_at: number;
  is_hidden: boolean;
}

interface EventItem {
  id: string;
  details: EventDetails;
  index: number;
  created_at: number;
  updated_at: number;
  is_hidden: boolean;
}

interface EventDetails {
  event_date: number;
  event_name: string;
  external_url: string;
  is_sold_out: boolean;
  links: Link[];
  location: EventLocation;
}

interface EventLocation {
  city: string;
  country: string;
  country_code: string;
  metadata: EventLocationMetadata;
  venue_formatted_address: string;
  venue_name: string;
}

interface EventLocationMetadata {
  lat: string;
  lng: string;
  timezone: number;
}

interface PodcastItem {
  id: string;
  details: PodcastDetails;
  index: number;
  created_at: number;
  updated_at: number;
  is_hidden: boolean;
}

interface PodcastDetails {
  artists: string[];
  image_url: string;
  links: Link[];
  release_date: number;
  title: string;
  type: string;
}

interface RosterItem {
  id: string;
  details: RosterDetails;
  index: number;
  created_at: number;
  updated_at: number;
  is_hidden: boolean;
}

interface RosterDetails {
  image_url: string;
  links: Link[];
  name: string;
}

interface ShopItem {
  id: string;
  details: ShopDetails;
  index: number;
  created_at: number;
  updated_at: number;
  is_hidden: boolean;
}

interface ShopDetails {
  image_url: string;
  links: Link[];
  price: string;
  title: string;
}

interface Link {
  url: string;
  type: string;
}
