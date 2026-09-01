"use client";

import { useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark,
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Lightbox({ images, activeIndex, onClose, onNavigate }) {
    const goPrev = useCallback(() => {
        onNavigate((activeIndex - 1 + images.length) % images.length);
    }, [activeIndex, images.length, onNavigate]);

    const goNext = useCallback(() => {
        onNavigate((activeIndex + 1) % images.length);
    }, [activeIndex, images.length, onNavigate]);

    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        }
        window.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose, goPrev, goNext]);

    if (activeIndex === null) return null;

    const current = images[activeIndex];

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm animate-lightbox-fade"
            onClick={onClose}
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-5 right-5 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
                <FontAwesomeIcon icon={faXmark} className="text-lg" />
            </button>

            {images.length > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        goPrev();
                    }}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            )}

            <figure
                className="relative max-h-[85vh] max-w-4xl animate-lightbox-scale"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={current.src}
                    alt={current.alt}
                    className="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
                />
                <figcaption className="mt-3 text-center text-sm text-white/70">
                    {current.alt} · {activeIndex + 1} / {images.length}
                </figcaption>
            </figure>

            {images.length > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        goNext();
                    }}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}
        </div>
    );
}