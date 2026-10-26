import { useEffect, useRef, useState } from "react";

interface ImageGalleryProps {
  alt: string;
  imageUrl: string | string[];
}

export function ImageGallery({ alt, imageUrl }: ImageGalleryProps) {
  const images = Array.isArray(imageUrl) ? imageUrl : [imageUrl];
  const [activeImage, setActiveImage] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const previewRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const preview = previewRef.current;

    if (!preview) {
      return;
    }

    if (isPreviewOpen && !preview.open) {
      preview.showModal();
    } else if (!isPreviewOpen && preview.open) {
      preview.close();
    }
  }, [isPreviewOpen]);

  if (images.length === 0) {
    return null;
  }

  const image = (
    <button
      className="block w-full cursor-zoom-in rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan h-full"
      type="button"
      aria-label={`Preview ${alt}`}
      onClick={() => setIsPreviewOpen(true)}
    >
      <img
        className="w-full rounded-xl border border-white/10 object-cover"
        src={images[activeImage]}
        alt={alt}
      />
    </button>
  );

  const gallery = images.length === 1 ? (
    image
  ) : (
    <div role="group" aria-label="Image gallery" aria-roledescription="carousel">
      {image}
      <div className="mt-3 flex items-center justify-between gap-3">
        <button
          className="rounded-md border border-line px-3 py-2 text-sm text-copy transition-colors hover:border-cyan hover:text-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
          type="button"
          aria-label="Previous image"
          onClick={() =>
            setActiveImage((activeImage - 1 + images.length) % images.length)
          }
        >
          Previous
        </button>
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Choose an image"
        >
          {images.map((_, index) => (
            <button
              className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan ${activeImage === index ? "bg-cyan" : "bg-muted hover:bg-cyan/60"}`}
              key={index}
              type="button"
              aria-label={`Show image ${index + 1} of ${images.length}`}
              aria-pressed={activeImage === index}
              onClick={() => setActiveImage(index)}
            />
          ))}
        </div>
        <button
          className="rounded-md border border-line px-3 py-2 text-sm text-copy transition-colors hover:border-cyan hover:text-cyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
          type="button"
          aria-label="Next image"
          onClick={() => setActiveImage((activeImage + 1) % images.length)}
        >
          Next
        </button>
      </div>
    </div>
  );

  return (
    <>
      {gallery}
      <dialog
        ref={previewRef}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden border-0 bg-black/95 p-4 text-white backdrop:bg-black/90 sm:p-8"
        aria-label="Image preview"
        onClose={() => setIsPreviewOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsPreviewOpen(false);
          }
        }}
        onKeyDown={(event) => {
          if (images.length < 2) {
            return;
          }

          if (event.key === "ArrowLeft") {
            event.preventDefault();
            setActiveImage((activeImage - 1 + images.length) % images.length);
          } else if (event.key === "ArrowRight") {
            event.preventDefault();
            setActiveImage((activeImage + 1) % images.length);
          }
        }}
      >
        <div className="flex h-full min-h-0 flex-col items-center justify-center">
         
          <button
            className="fixed right-4 top-4 z-[100] inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-xl border border-cyan/40 bg-[#16233a] px-4 text-xs font-semibold text-white transition-colors hover:border-cyan/70 hover:bg-[#1d3150] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan sm:right-8 sm:top-8"
            type="button"
            aria-label="Close image preview"
            onClick={() => setIsPreviewOpen(false)}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m5 5 10 10M15 5 5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span>Close</span>
          </button>

          {images.length > 1 && (
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/50 px-4 py-3 text-xl text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan sm:left-8"
              type="button"
              aria-label="Previous image"
              onClick={() =>
                setActiveImage(
                  (activeImage - 1 + images.length) % images.length,
                )
              }
            >
              <span aria-hidden="true">←</span>
            </button>
          )}

          <img
            className="relative z-0 max-h-full max-w-full flex-1 object-contain"
            src={images[activeImage]}
            alt={alt}
          />

          {images.length > 1 && (
            <>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/50 px-4 py-3 text-xl text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan sm:right-8"
                type="button"
                aria-label="Next image"
                onClick={() =>
                  setActiveImage((activeImage + 1) % images.length)
                }
              >
                <span aria-hidden="true">→</span>
              </button>
              <p className="mt-4 text-sm text-white/80" aria-live="polite">
                Image {activeImage + 1} of {images.length}
              </p>
            </>
          )}

        </div>
      </dialog>
    </>
  );
}
