import SubsectionHeader from "./SubsectionHeader";

const components = {
  h2: (props) => <SubsectionHeader level={2} {...props} />,
  h3: (props) => <SubsectionHeader level={3} {...props} />,
};

export default components;
