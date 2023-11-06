interface TypographyProps {
  text: string;
}
export const Title = ({ text }: TypographyProps) => (
  <h1 className="text-center uppercase my-10 text-5xl font-bold">{text}</h1>
);

export const Subtitle = ({ text }: TypographyProps) => (
  <h2 className="uppercase my-4 text-3xl font-bold">{text}</h2>
);

export const Description = ({ text }: TypographyProps) => (
  <p className="font-bold text-lg mb-2">{text}</p>
);
