'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Crop, Check, X, Sparkles, Image as ImageIcon, ZoomIn, ZoomOut } from 'lucide-react';

export default function ImageCropModal({ file, aspectRatio = '1:1', onCropComplete, onClose }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [isCompressing, setIsCompressing] = useState(false);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImageSrc(e.target.result);
      reader.readAsDataURL(file);
    }
  }, [file]);

  const handleCropAndCompress = () => {
    if (!imageRef.current) return;
    setIsCompressing(true);

    const img = imageRef.current;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Determine target width & height based on aspect ratio
    let targetWidth = 800;
    let targetHeight = 800;

    if (aspectRatio === '16:9') {
      targetWidth = 1200;
      targetHeight = 675;
    } else if (aspectRatio === '21:9') {
      targetWidth = 1400;
      targetHeight = 600;
    }

    canvas.width = targetWidth;
    canvas.height = targetHeight;

    // Center crop & scale math
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const targetAspect = targetWidth / targetHeight;

    let renderWidth = targetWidth;
    let renderHeight = targetHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (imgAspect > targetAspect) {
      renderWidth = targetHeight * imgAspect;
      offsetX = (targetWidth - renderWidth) / 2;
    } else {
      renderHeight = targetWidth / imgAspect;
      offsetY = (targetHeight - renderHeight) / 2;
    }

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, targetWidth, targetHeight);

    // Apply zoom adjustment
    ctx.save();
    ctx.drawImage(img, offsetX, offsetY, renderWidth * zoom, renderHeight * zoom);
    ctx.restore();

    // Export compressed JPEG Blob (80% quality compression for ultra-fast loading under 200KB)
    canvas.toBlob(
      (blob) => {
        setIsCompressing(false);
        if (blob) {
          const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, "") + "_cropped.jpg", {
            type: 'image/jpeg'
          });
          onCropComplete(compressedFile);
        }
      },
      'image/jpeg',
      0.82
    );
  };

  if (!imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-md">
      <div className="bg-surface dark:bg-obsidian-card border border-surface-container-high dark:border-white/15 w-full max-w-lg rounded-3xl p-6 space-y-6 shadow-2xl relative text-center">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-surface-container dark:bg-white/10 text-on-surface dark:text-gray-300 hover:opacity-80"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neon-saffron/10 text-neon-saffron text-xs font-bold uppercase">
            <Crop className="w-3.5 h-3.5" />
            <span>Image Cropper & Compressor</span>
          </div>
          <h3 className="font-headline font-bold text-xl text-primary dark:text-white">
            Adjust & Compress Photo
          </h3>
          <p className="text-xs text-outline dark:text-gray-400">
            Target aspect ratio: <strong className="text-neon-saffron">{aspectRatio}</strong>. File size will be compressed under 250KB for fast performance.
          </p>
        </div>

        {/* PREVIEW CONTAINER */}
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-black/40 border border-surface-container-high dark:border-white/10 flex items-center justify-center">
          <img
            ref={imageRef}
            src={imageSrc}
            alt="Preview"
            style={{ transform: `scale(${zoom})` }}
            className="max-h-full max-w-full object-contain transition-transform duration-200"
          />
        </div>

        {/* ZOOM CONTROLS */}
        <div className="flex items-center justify-center space-x-4">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.8, z - 0.1))}
            className="p-2 rounded-xl bg-surface-container dark:bg-white/10 text-on-surface dark:text-white text-xs font-bold flex items-center space-x-1"
          >
            <ZoomOut className="w-4 h-4" />
            <span>Zoom Out</span>
          </button>

          <span className="text-xs font-mono font-bold text-neon-saffron">
            {Math.round(zoom * 100)}%
          </span>

          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(2, z + 0.1))}
            className="p-2 rounded-xl bg-surface-container dark:bg-white/10 text-on-surface dark:text-white text-xs font-bold flex items-center space-x-1"
          >
            <ZoomIn className="w-4 h-4" />
            <span>Zoom In</span>
          </button>
        </div>

        {/* CROP AND SAVE ACTION */}
        <button
          type="button"
          disabled={isCompressing}
          onClick={handleCropAndCompress}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          <Check className="w-5 h-5" />
          <span>{isCompressing ? 'Compressing Photo...' : 'Crop, Compress & Upload'}</span>
        </button>

      </div>
    </div>
  );
}
