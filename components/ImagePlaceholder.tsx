const STRIPES =
  "repeating-linear-gradient(45deg,#e4e6e1,#e4e6e1 10px,#eceee9 10px,#eceee9 20px)";

type ImagePlaceholderProps = {
  label?: React.ReactNode;
  variant?: "stripes" | "dashed";
  style?: React.CSSProperties;
};

export default function ImagePlaceholder({
  label,
  variant = "stripes",
  style,
}: ImagePlaceholderProps) {
  const base: React.CSSProperties =
    variant === "dashed"
      ? {
          background: "rgba(255,255,255,0.02)",
          border: "1px dashed rgba(255,255,255,0.06)",
          borderRadius: "12px",
        }
      : {
          background: STRIPES,
          borderRadius: "0",
        };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...base,
        ...style,
      }}
    >
      {label ? (
        <span
          style={{
            font: "500 11.5px/1.5 ui-monospace,Menlo,monospace",
            color: variant === "dashed" ? "#a9b1aa" : "#8a938c",
            textAlign: "center",
            letterSpacing: ".02em",
          }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
