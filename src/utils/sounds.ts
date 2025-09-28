// src/utils/sounds.ts

export const playSound = (src: string, isMuted: boolean) => {
  if (typeof Audio !== 'undefined' && !isMuted) {
    // Path'in her zaman kök dizinden başlamasını garantileyelim
    const audioSrc = src.startsWith('/') ? src : `/${src}`;
    const audio = new Audio(audioSrc);
    audio.play().catch(e => console.error("Ses oynatılırken bir hata oluştu:", e));
  }
};

// --- Pozitif Sesler ---
export const playSuccessSound = (isMuted: boolean) => playSound('/sounds/yay.mp3', isMuted);
export const playPurchaseSound = (isMuted: boolean) => playSound('/sounds/purchase.mp3', isMuted);
export const playConfirmSound = (isMuted: boolean) => playSound('/sounds/confirm.mp3', isMuted);
export const playIntroSound = (isMuted: boolean) => playSound('/sounds/intro.mp3', isMuted);

// --- Nötr/Arayüz Sesleri ---
export const playSwipeSound = (isMuted: boolean) => playSound('/sounds/swipe.mp3', isMuted);

// --- Negatif Sesler ---
export const playFailSound = (isMuted: boolean) => playSound('/sounds/fail.mp3', isMuted);

// Önceki fonksiyon isimleriyle uyumluluk için (opsiyonel ama geçişi kolaylaştırır)
export const playYaySound = playSuccessSound;
export const playAchievementSound = playSuccessSound;
export const playGoodResultSound = playSuccessSound;
export const playShatterSound = playFailSound;