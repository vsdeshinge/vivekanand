import { useEffect, useMemo, useState } from "react";

// 👉 Replace these with your real image paths
// 5 single pages
const PAGES = [
  "/book/page1.jpg",
  "/book/page2.jpg",
  "/book/page3.jpg",
  "/book/page4.jpg",
  "/book/page5.jpg",
];

const AUTO_DELAY = 3500; // ms between page turns

export default function BookImageBook() {
  // Build spreads:
  // spread 0: [page1, null]  (single page)
  // spread 1: [page2, page3]
  // spread 2: [page4, page5]
  const spreads = useMemo(() => {
    const result = [];
    if (PAGES.length > 0) {
      result.push({ left: PAGES[0], right: null });
    }
    for (let i = 1; i < PAGES.length; i += 2) {
      result.push({
        left: PAGES[i],
        right: PAGES[i + 1] ?? null,
      });
    }
    return result;
  }, []);

  const [currentSpread, setCurrentSpread] = useState(0);

  // Auto flip to next spread
  useEffect(() => {
    if (spreads.length === 0) return;
    const id = setInterval(() => {
      setCurrentSpread((prev) => (prev + 1) % spreads.length);
    }, AUTO_DELAY);
    return () => clearInterval(id);
  }, [spreads.length]);

  if (spreads.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="book-3d w-full max-w-3xl">
        {/* Only shadow, no borders */}
        <div className="relative book-inner shadow-2xl">
          {spreads.map((spread, index) => {
            const isFlipped = index < currentSpread;
            const isActive = index === currentSpread;

            return (
              <div
                key={index}
                className={[
                  "book-sheet",
                  isFlipped ? "book-sheet--flipped" : "",
                  isActive ? "book-sheet--active" : "",
                ].join(" ")}
                style={{ zIndex: spreads.length - index }}
              >
                {/* FRONT SIDE — visible before flip */}
                <div className="book-side book-side--front">
                  {/* LEFT PAGE */}
                  <div className="book-page">
                    {spread.left && (
                      <div className="book-img-wrap">
                        <img
                          src={spread.left}
                          alt={`Page left ${index}`}
                          className="book-img"
                        />
                      </div>
                    )}
                  </div>

                  {/* RIGHT PAGE */}
                  <div className="book-page">
                    {spread.right && (
                      <div className="book-img-wrap">
                        <img
                          src={spread.right}
                          alt={`Page right ${index}`}
                          className="book-img"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* BACK SIDE — plain paper when flipped */}
                <div className="book-side book-side--back">
                  <div className="book-page">
                    <div className="book-back-paper" />
                  </div>
                  <div className="book-page">
                    <div className="book-back-paper" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DOTS: which spread is active */}
      <div className="flex gap-2 mt-1">
        {spreads.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSpread(i)}
            className={[
              "h-1.5 rounded-full transition-all",
              i === currentSpread ? "w-6 bg-orange-500" : "w-2 bg-orange-200",
            ].join(" ")}
            aria-label={`Go to spread ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
