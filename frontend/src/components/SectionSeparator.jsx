import img from './image.png';

const SectionSeparator = () => {
  return (
    <div className=" relative pb-12">
      <div className="relative container mx-auto px-4 flex items-center justify-center">
        <img src={img}alt="Coffee Icon" className=" w-48 h-10" />
    </div>
    </div>
  );
};

export default SectionSeparator;