import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";
import { useQuery } from "@tanstack/react-query";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  const {
    data: cabins,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p as="h1">Filter/Sort</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
