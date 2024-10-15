// next.config.mjs
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), "styles")],
        prependData: `
      @import '/app/_styles/_variables.scss';
      @import '/app/_styles/_mixins.scss';
    `,
    },
};

export default nextConfig;
