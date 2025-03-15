import FilterButton from "@/components/filterButton/FilterButton";  
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div className="filterPageWrapper">
      <Container fluid="lg">
        <div className="filterContainer">
            <FilterButton />
        </div>
      </Container>
      </div>
    </>
  );
}
