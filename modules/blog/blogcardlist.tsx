import BlogTitle from "@/common/elements/blog/blogtitle";
import { IBlog } from "@/common/types/blog";
import { NextPage } from "next";

interface Props {
    blogs: IBlog[]
}

const BlogCardList: NextPage<Props> = ({blogs}) => {
    return (
        <div>
            {blogs.map((blog, i) => {

                return (
                    <div key={i}>
                        <BlogTitle 
                            title={blog.attributes.Title} 
                            isClickable={true} 
                            blogId={blog.id}
                            bannerUrl={blog.attributes.Banner.data.attributes.url}
                        />
                    </div>
                );
            })}
        </div>
    )
}

export default BlogCardList;