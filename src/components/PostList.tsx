import Link from "next/link"
interface Post {
    userId : number,
    id : number,
    title : string,
    body : string,
}

interface PostListProps {
    posts: Post[];
}
export default function PostList({posts}: PostListProps) {
    
    return (
        <div className="post-list">
      {
        posts.map((post)=>(
          <div className="post-item" key={post.id}>
            <h2><Link href='/'>{post.title}</Link></h2>
          </div>
        ))
      }
    </div>
    )
};
