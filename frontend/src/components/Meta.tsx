import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keyowrds }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keyowrds} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Proshop",
  description: "We sell the best products for cheap",
  keyowrds: "electronics, buy electronics, cheap electronics",
};

export default Meta;
