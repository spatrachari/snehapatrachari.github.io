import useInView from "react-cool-inview";

const AnimateInView = (props) => {
  const { ref, inView } = useInView({
    rootMargin: "-50px 0px 30px",
    ...props.viewOpts,
  });

  return (
    <div
      ref={ref}
      className={inView ? `animate__animated ${props.class}` : "hidden"}
    >
      {props.children}
    </div>
  );
};

export default AnimateInView;
