import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "public/posts");

export function getPosts() {
    // `public` assets are served separately by Cloudflare Workers and are not
    // available as a runtime filesystem directory inside the worker bundle.
    // The posts are read during local/static builds; at runtime the prerendered
    // blog pages are served instead.
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const files = fs.readdirSync(postsDirectory)
        .filter(file => file.endsWith(".mdx"));

    return files.map((file) => {
        const slug = file.replace(".mdx", "");

        const fileContent = fs.readFileSync(
            path.join(postsDirectory, file),
            "utf-8"
        );

        const { data } = matter(fileContent);

        return {
            slug,
            ...data,
        };
    });
}

export function getPost(slug) {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return {
        slug,
        ...data,
        content,
    };
}
