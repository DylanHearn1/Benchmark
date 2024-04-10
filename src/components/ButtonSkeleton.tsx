interface ButtonSkeletonProps {
  hollow: boolean;
}

const ButtonSkeleton = ({ hollow }: ButtonSkeletonProps) => {
  return (
    <div
      className={
        hollow
          ? 'border-white/10 border-4 animate-pulse w-24 h-10'
          : 'bg-white/10 animate-pulse w-24 h-10'
      }
    ></div>
  );
};

export default ButtonSkeleton;
