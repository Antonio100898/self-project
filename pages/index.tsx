export const getServerSideProps = () => {
  return {
    redirect: {
      permanent: true,
      destination: "/home",
    },
  };
};

export default function index() {
  return <></>;
}
