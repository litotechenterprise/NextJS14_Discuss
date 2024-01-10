import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/paths";
import { fetchCommentByPostId } from "@/db/queries/comments";

interface PostShowPageProps {
  params: {
    slugs: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slugs, postId } = params;

  return (
    <div className="space-y-3">
      <Link
        className="underline decoration-solid"
        href={paths.topicShow(slugs)}
      >
        {"< "}Back to {slugs}
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      <CommentList fetchData={() => fetchCommentByPostId(postId)} />
    </div>
  );
}