export interface Item {
  'id': number;
  'name': string;
  'full_name': string;
  'private': false;
  'owner': {
    'login': string;
    'id': number;
    'avatar_url': string;
    'url': string;
  };
  'html_url': string;
  'description': string;
}
