const Divider = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-11/12 bg-indigo-500 h-1 mx-auto rounded-xl" />
      </div>
    </div>
  );
};
export default Divider;
