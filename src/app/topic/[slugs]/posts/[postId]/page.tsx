import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/paths";
import { Suspense } from "react";
import PostShowLoading from "@/components/posts/post-show-loading";
interface PostShowPageProps {
  params: {
    slugs: string;
    postId: string;
  };
}

export default function PostShowPage({ params }: PostShowPageProps) {
  const { slugs, postId } = params;

  return (
    <div className="space-y-3">
      <Link
        className="underline decoration-solid"
        href={paths.topicShow(slugs)}
      >
        {"< "}Back to {slugs}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>

      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
}
