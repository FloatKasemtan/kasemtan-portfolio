export function Loading(): React.ReactNode {
  return (
    <div className="flex m-16 justify-center">
      {["L", "O", "A", "D", "I", "N", "G", ".", ".", "."].map((char, i) => (
        <div
          key={i}
          className="animate-bounce mx-1"
          style={{
            animationDelay: `${0.1 * i}s`,
            fontSize: "2rem",
            fontWeight: "bold",
            color: "rgb(101, 127, 222)",
          }}
        >
          {char}
        </div>
      ))}
    </div>
  );
}
