import Avatar from "../atoms/Avatar";
import Stars from "../atoms/Stars";

function ReviewCard({ review }) {
  return (
    <article className="card-surface p-6">
      <div className="flex items-center gap-3">
        <Avatar name={review.author} />
        <span>
          <span className="block font-semibold text-ink-900">{review.author}</span>
          <span className="block text-sm text-ink-500">{review.date}</span>
        </span>
      </div>
      <Stars value={review.rating} className="mt-4" />
      <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{review.text}</p>
    </article>
  );
}

export default ReviewCard;
