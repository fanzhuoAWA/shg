import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "飞屋工作室官网",
	subtitle: "(*^▽^*)",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 195, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/background.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "bottom", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
		   src: '/src/assets/images/favicon.ico',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		   sizes: '48x48',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "成员",       // 导航栏上显示的文字
			url: "/members/",   // 对应的URL路径
			external: false,    // 设置为false，表示是站内链接
		},
		{
  			name: "树洞",
  			url: "javascript:void(0)",
  			external: false,
		},
		{
  			name: "飞屋之域 Wiki",
  			url: "https://skyworldhouse.fandom.com/zh/wiki/%E9%A3%9E%E5%B1%8B%E4%B9%8B%E5%9F%9F_Wiki",
  			external: true,
		},
		// {
		// 	name: "Fanzhuo",
		// 	url: "https://fanzhuo.xyz/", // Internal links should not include the base path, as it is automatically added
		// 	external: true, // Show an external link icon and will open in a new tab
		// },
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "飞屋工作室",
	bio: "欢迎来到飞屋工作室官方网站！",
	links: [
		// {
		// 	name: "Support me",
		// 	icon: "material-symbols:favorite-outline", // Visit https://icones.js.org/ for icon codes
		// 	// You will need to install the corresponding icon set if it's not already included
		// 	// `pnpm add @iconify-json/<icon-set-name>`
		// 	url: "https://afdian.com/a/fanzhuo",
		// },
		{
			name: "BiliBili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/3546771676466025",
		},
		// {
		// 	name: "GitHub",
		// 	icon: "fa6-brands:github",
		// 	url: "https://github.com/fanzhuoAWA",
		// },
		{
			name: "QQ",
			icon: "fa6-brands:qq",
			url: "https://qm.qq.com/q/pdR5SRA9DU",
		},
		{
			name: "小红书",
			icon: "simple-icons:xiaohongshu",
			url: "https://www.xiaohongshu.com/user/profile/665ec2e4000000000b033674?xsec_token=YBB5hYFwDFnsSP-UsJa7Kg-kqUE0LGpTVtz8D2oF-TsBQ%3D&xsec_source=app_share&xhsshare=CopyLink&appuid=68588b99000000001b0182fb&apptime=1750633814&share_id=44b4dc48f2944869bb4bfb84f9d2c23e&share_channel=copy_link",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
