export interface Api {
  total_count: number;
  incomplete_results: boolean;
  items: Array<Item>;
}

export interface Item {
  'id': number;
  'name': string;
  'full_name': string;
  'private': false;
  'owner': {
    'id': number;
    'login': string;
    'url': string;
    'avatar_url': string;
  };
  'html_url': string;
  'description': string;
}

export interface ItemByUrl {
  'login': string;
  'avatar_url': string;
  'type': string;
  'url': string;
}
