interface AnchorGradientProps {
  href: string;
  text: string;
}

const AnchorGradient = ({ href, text }: AnchorGradientProps) => {
  return (
    <a href={href} className="anchor-gradient px-3 py-1">
      {text}
    </a>
  );
};

export default AnchorGradient;
