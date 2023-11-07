interface TypographyProps {
  text: string;
  small?: boolean;
}
export const Title = ({ text }: TypographyProps) => (
  <h1
    style={{
      fontFamily: "'Bree Serif', serif",
    }}
    className="text-center my-10 text-5xl font-bold"
  >
    {text}
  </h1>
);

export const Subtitle = ({ text }: TypographyProps) => (
  <h2 className="uppercase my-4 text-3xl font-bold">{text}</h2>
);

export const Description = ({ text, small }: TypographyProps) => {
  if (small) {
    return <p className="text-sm text-gray-600 italic">{text}</p>;
  }

  return <p className="font-bold text-lg mb-2">{text}</p>;
};
