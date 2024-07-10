"use client";


const ScrollDownIndicator = () => {
  return (
    <div className="my-16 flex justify-center">
      <p className="scrollDownText animate-bounce text-2xl">⬇️</p>
      <style jsx>{`
        .scrollDownText {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollDownIndicator;
