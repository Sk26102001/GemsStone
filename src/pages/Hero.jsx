

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden max-h-[90vh]">
      {/* 🎥 Background Video/Image */}
      <img
        className="w-full h-full max-h-screen object-cover"
        src="./gems.webp"
        autoPlay
        loop
        muted
        playsInline
        alt="Banner background"
      />
</section>
  );
}
