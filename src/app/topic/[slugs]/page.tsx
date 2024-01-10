import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";
interface TopicShowPageProps {
  params: {
    slugs: string;
  };
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { slugs } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slugs}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(slugs)} />
      </div>

      <div>
        <PostCreateForm slug={slugs} />
      </div>
    </div>
  );
}
