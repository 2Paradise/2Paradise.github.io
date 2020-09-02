import { cateType, CommonColorType } from "../types"

export const CONTENT_PER_PAGE: number = 8;
export const PAGE_PER_SCREEN: number = 4;

export const POST: string = 'post';

// Site Information
export const NAME: string = '2Paradise Blog';
export const TITLE: string = '2Paradise Blog';
export const PREFIX: string = '2Paradise | ';
export const DESCRIPTION: string = 'I always want to be a respected developer.';
export const AUTHOR: string = '2Paradise';
export const EMAIL: string = 'robinnwpa@gmail.com';
export const KEYWORDS = [
  'Gatsby',
  'ReactJS',
].join(', ');
export const SITE_URL: string = 'https://2Paradise.github.io';
export const PROFILE: string = 'https://avatars0.githubusercontent.com/u/65708679?s=460&u=6f2003c81185fbe1d98b89816a353f18c09b8dd5&v=4';

// Social
export const GITHUB_ID: string = '2Paradise';
export const TWITTER_ID: string = '';
export const FACEBOOK_ID: string = 'robinnw';
export const LINKEDIN_ID: string = '';

// Disqus (Recommend you to use this)
export const DISQUS_ID: string = '2Paradise';

export const COMMON_COLORS: CommonColorType = {
  green:  "#428E71"
  , red: "#E5784F"
  , white: "#F4DCD2"
  , blue: "#4D56A5"
  , black: "#271C31"
  , skyblue: "#19BADD"
};

export const COMMON_COLOR: string | undefined = COMMON_COLORS.blue;

export const COMMONT_CATE: cateType = {
  react : {
    icon : "/icons/react-icon.png",
    color: COMMON_COLORS.skyblue,
  },
  javascript: {
    icon : "/icons/javascript-icon.png",
    color: COMMON_COLORS.red,
  }
  , etc : {
    icon : "/icons/etc-icon.png",
    color: COMMON_COLORS.green,
  }
  , typescript: {
    icon : "/icons/typescript-icon.png",
    color: COMMON_COLORS.blue
  }
}
