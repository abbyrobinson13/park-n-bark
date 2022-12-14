import React from "react";
import { useState, useEffect, useMemo } from "react";
import PaginationComponent from "./Pagination.jsx";
import TableHeader from "./TableHeader.jsx";
import Search from "./Search.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchModal from "../SearchModal.jsx";
import { Typography } from "@mui/material";

function DataTable() {
  const [parks, setParks] = useState([]);
  const [park, setPark] = useState();
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: " " });
  const [num, setNum] = useState(0);

  const ITEMS_PER_PAGE = 25;

  const handleClick = (p) => {
    setNum(() => num + 1);
    setPark(p);
  };

  const headers = [
    { name: "Title", field: "title", sortable: true },
    { name: "Quadrant", field: "quadrant", sortable: true },
    { name: "Address", field: "address", sortable: false },
    { name: "Fenced", field: "fenced", sortable: true },
    { name: "River Access", field: "riverAccess", sortable: false },
    { name: "Agility Equiptment", field: "agilityEquiptment", sortable: false },
  ];

  useEffect(() => {
    const getAllParks = async () => {
      const response = await fetch("/api/park");
      let parksData = await response.json();
      setParks(parksData);
    };
    getAllParks();
  }, []);

  const commentData = useMemo(() => {
    let computedData = parks;

    if (search) {
      computedData = computedData.filter(
        (park) =>
          park.properties.title.toLowerCase().includes(search.toLowerCase()) ||
          park.properties.address
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          park.properties.fenced.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(computedData.length);

    //sorting components
    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedData = computedData.sort((a, b) => {
        console.log(a);
        return (
          reversed *
          a.properties[sorting.field].localeCompare(b.properties[sorting.field])
        );
      });
    }
    //Current Page Slice
    return computedData.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [parks, currentPage, search, sorting]);

  return (
    <>
      <Typography variant="h4" paddingBottom={2} paddingTop={2}>
        Off Leash Parks
      </Typography>
      <div className="row w-100">
        <div className="col mb-3 col-12 text-center">
          <div className="row">
            <div className="col-md-6">
              <PaginationComponent
                total={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
            <div className="col-md-6 d-flex flex-row-reverse">
              {" "}
              <Search
                onSearch={(value) => {
                  setSearch(value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <table className="table table-striped">
            <TableHeader
              headers={headers}
              onSorting={(field, order) => setSorting({ field, order })}
            />

            <tbody>
              {commentData.map((comment) => (
                <tr onClick={() => handleClick(comment)}>
                  <th scope="row">{comment.properties.title}</th>
                  <th>{comment.properties.quadrant}</th>
                  <th>{comment.properties.address}</th>
                  <th>{comment.properties.fenced}</th>
                  <th>{comment.properties.riverAccess ? "Yes" : "No"}</th>
                  <th>{comment.properties.agilityEquiptment ? "Yes" : "No"}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <SearchModal parks={park} num={num} />
      </div>
    </>
  );
}

export default DataTable;
