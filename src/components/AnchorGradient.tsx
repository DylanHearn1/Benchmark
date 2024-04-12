interface AnchorGradientProps {
  href: string;
  text: string;
}

const AnchorGradient = ({ href, text }: AnchorGradientProps) => {
  return (
    <div className="bg-anchor-gradient cursor-pointer">
      <a href={href} className="test">
        {text}
      </a>
    </div>
  );
};

export default AnchorGradient;
