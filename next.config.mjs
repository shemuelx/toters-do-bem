/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config, { isServer }) {
		config.module.rules.push({
			test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
			use: {
				loader: "file-loader",
				options: {
					outputPath: "static/media/",
					publicPath: "/_next/static/media/",
					name: "[name].[hash].[ext]",
				},
			},
		});

		return config;
	},
    output: "export",
    basePath: "/toters-do-bem",
    assetPrefix: "/toters-do-bem",
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
};

export default nextConfig;
