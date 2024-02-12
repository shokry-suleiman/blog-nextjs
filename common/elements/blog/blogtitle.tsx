import { NextPage } from "next"
import Link from "next/link"
import Image from "next/image";

interface Props {
    title: string
    isClickable: boolean
    blogId?: string
    bannerUrl?:string
}

const BlogTitle: NextPage<Props> = ({title, isClickable, blogId,bannerUrl}) => {
    const myLoader = ({ src }) => {
        return `http://127.0.0.1:1337${bannerUrl}`;
      };
    
    if(isClickable && blogId) {
        return (
            <Link href={`/blog/${blogId}`}>
                 <Image
        loader={myLoader}
        src={
          "http://127.0.0.1:1337" + bannerUrl
        }
        width={500}
        height={500}
        alt="Picture of the author"
      />
                {title}
                </Link>   
        )
    } else {
        return (
            <div>
                   <Image
        loader={myLoader}
        src={
          "http://127.0.0.1:1337" + bannerUrl
        }
        width={500}
        height={500}
        alt="Picture of the author"
      />
                  <p>{title}</p>

            </div>
        )
    }
}

export default BlogTitle