import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "public/posts");

export function getPosts() {
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
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return {
        slug,
        ...data,
        content,
    };
}