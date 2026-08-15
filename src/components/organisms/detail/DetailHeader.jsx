import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FiShare, FiMapPin, FiCheck } from "react-icons/fi";
import Badge from "../../atoms/Badge";
import Button from "../../atoms/Button";
import Rating from "../../atoms/Rating";
import { useFavorites } from "../../../hooks/useFavorites";

const COPIED_MS = 2000;

function DetailHeader({ restaurant }) {
  const { isFavorite, toggle } = useFavorites();
  const [copied, setCopied] = useState(false);
  const saved = isFavorite(restaurant.id);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: restaurant.name, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), COPIED_MS);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <nav className="mb-5 flex items-center gap-2 text-sm text-ink-500" aria-label="Breadcrumb">
        <Link to="/" className="transition-colors hover:text-ink-900">
          Home
        </Link>
        <span aria-hidden>/</span>
        <Link to="/#restaurants" className="transition-colors hover:text-ink-900">
          Restaurants
        </Link>
        <span aria-hidden>/</span>
        <span className="truncate text-ink-900">{restaurant.name}</span>
      </nav>

      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="min-w-0">
          <h1 className="text-balance font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            {restaurant.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[15px] text-ink-600">
            <Rating value={restaurant.averageRating} />
            <span aria-hidden>·</span>
            <a href="#reviews" className="link-underline">
              {restaurant.totalReviews} reviews
            </a>
            <span aria-hidden>·</span>
            <span className="flex items-center gap-1.5">
              <FiMapPin className="text-ink-400" />
              {restaurant.neighborhood}
            </span>
            {restaurant.badge && <Badge variant="ember">{restaurant.badge}</Badge>}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <Button variant="ghost" size="sm" onClick={handleShare}>
            {copied ? <FiCheck className="text-ember-600" /> : <FiShare />}
            <span className="underline underline-offset-4">
              {copied ? "Link copied" : "Share"}
            </span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggle(restaurant.id)}
            aria-pressed={saved}
          >
            <FaHeart className={saved ? "text-ember-600" : "text-ink-400"} />
            <span className="underline underline-offset-4">{saved ? "Saved" : "Save"}</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default DetailHeader;
