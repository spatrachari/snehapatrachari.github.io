import useInView from "react-cool-inview";

const SectionHeader = (props) => {
  const { ref, inView } = useInView({ rootMargin: "-50px 0px 30px" });

  return (
    <h2
      ref={ref}
      className={inView ? "animate__animated animate__fadeInDown" : "hidden"}
    >
      {props.children}
    </h2>
  );
};

export default SectionHeader;
