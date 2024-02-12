import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { IBlog } from "@/common/types/blog";
import { LIST_BLOG, LIST_ID, SINGLE_BLOG } from "@/common/graphql/queries";
import { IBlogIdentification } from "@/common/types/bloginterface";
import Image from "next/image";

interface Props {
  blog: IBlog;
}

const client = new ApolloClient({
  uri: process.env.STRAPI_ADDRESS,
  cache: new InMemoryCache(),
});

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: LIST_ID });
  const ids: IBlogIdentification[] = data.blogs.data;

  const paths = ids.map((id) => {
    return { params: { ...id } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { data } = await client.query({
    query: SINGLE_BLOG,
    variables: { blogId: params!.id },
  });
  console.log("data", data);
  const blog: IBlog = data.blog.data;

  return {
    props: {
      blog: blog,
    },
  };
};

const Blog: NextPage<Props> = ({ blog }) => {
  console.log(blog);
  const myLoader = ({ src }) => {
    return `http://127.0.0.1:1337${blog.attributes.Banner.data.attributes.url}`;
  };

  return (
    <div>
      <Image
        loader={myLoader}
        src={
          "http://127.0.0.1:1337" + blog.attributes.Banner.data.attributes.url
        }
        width={500}
        height={500}
        alt="Picture of the author"
      />

      <p>{blog.attributes.Title}</p>
      <p>{blog.attributes.Description}</p>
      <p>{blog.attributes.Body[0].children[0].text}</p>
    </div>
  );
};

export default Blog;
