import client from "@/common/graphql/client";
import { LIST_BLOG } from "@/common/graphql/queries";
import { IBlog } from "@/common/types/blog";
import BlogCardList from "@/modules/blog/blogcardlist";
import {GetStaticProps, NextPage} from "next";

interface Props {
    blogs: IBlog[]
}
export const getStaticProps: GetStaticProps<Props> = async () => {
    const {data} = await client.query({query: LIST_BLOG})
    const blogs: IBlog[] = data.blogs.data;
    console.log(data)
    return {
        props: {
            blogs
        }
    }
}
const About: NextPage<Props> = ({blogs}) => {
    return (
        <BlogCardList blogs={blogs}/>

    )
}

export default About;