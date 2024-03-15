interface AnchorGradientProps {
  href: string;
  text: string;
}

const AnchorGradient = ({ href, text }: AnchorGradientProps) => {
  return (
    <div className="bg-anchor-gradient px-3 py-1 hover:text-black/80 cursor-pointer">
      <a href={href} className="test">
        {text}
      </a>
    </div>
  );
};

export default AnchorGradient;
