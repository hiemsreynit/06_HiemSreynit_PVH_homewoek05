import { BookMarked } from "lucide-react";

export default function BookmarkComponent({ onToggle }) {
  return (
    <button onClick={onToggle} className="flex items-center gap-x-2 hover:text-yellow-400">
        <p>Your Bookmark</p>
      <BookMarked />
    </button>
  );
}
