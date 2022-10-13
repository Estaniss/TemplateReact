import { Helmet } from "react-helmet";

const HeadHTML: React.FC = () => (
  <Helmet>
    <title>Template ReactJs</title>
    <meta
      name="description"
      content="modelo de template para projetos futuros"
    />
    <meta name="theme-color" content="#04a00b" />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

export default HeadHTML;
