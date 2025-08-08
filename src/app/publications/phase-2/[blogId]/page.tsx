import React from "react";
import styles from "./blogId.module.scss";
import "@/styles/abstracts/blog.scss";
import SocialShare from "@/components/socialShare/SocialShare";
import Link from "next/link";
import Container from "@/components/Container/Container";
import { categoryMap, BlogItem } from "@/data/blog-category";

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_API}/services/blogs`;

  const blogs = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_PHASE_II}`,
    },
  }).then((res) => res.json());

  if (blogs.error || !blogs) {
    return [];
  }

  return blogs.data.blogs.map((blog: any) => {
    return {
      blogId: blog.blogId,
    };
  });
}

const BlogItemPage = async ({ params }: { params: { blogId: string } }) => {
  const url = `${process.env.NEXT_PUBLIC_API}/services/blog/${params.blogId}`;

  const blogItem: BlogItem | null = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_PHASE_II}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) throw new Error(res.message);
      return res.data;
    })
    .catch((err) => {
      console.error(err.message);
      return null;
    });

  if (!blogItem) {
    return (
      <div className={styles.loader}>
        <p>Blog not found</p>
      </div>
    );
  }

  let blogHTML = {
    __html: blogItem.content,
  };

  let createdAt = new Date();
  if (blogItem?.createdAt) {
    createdAt = new Date(blogItem.createdAt);
  }

  let updatedAt = new Date();
  if (blogItem?.updatedAt) {
    updatedAt = new Date(blogItem.updatedAt);
  }

  return (
    <Container className={styles.blog}>
      <div className={styles.main}>
        <h1>{blogItem.title}</h1>

        <p className={styles.meta}>
          <span className={styles.author}>{blogItem.author}</span>
          <span className={styles.date}>{createdAt.toDateString()}</span>

          <Link
            href={
              categoryMap[blogItem.category as keyof typeof categoryMap]
                ?.link ?? ""
            }
            data-type="link"
            data-variant="secondary"
          >
            {blogItem.category}
          </Link>
        </p>

        {blogItem.cover && (
          <div className={styles.image}>
            <img src={blogItem.cover} alt={blogItem.title} />
          </div>
        )}

        <SocialShare title={blogItem.title} />
      </div>

      <div className={styles.content} dangerouslySetInnerHTML={blogHTML}></div>

      <SocialShare title={blogItem.title} />
    </Container>
  );
};

export default BlogItemPage;
