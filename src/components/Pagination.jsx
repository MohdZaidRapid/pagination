import React from "react";
import { returnPaginationRange } from "../utils/appUtils";

const Pagination = (props) => {
  let array = returnPaginationRange(
    props.totalPage,
    props.page,
    props.limit,
    props.siblings
  );
  return (
    <div>
      <ul className="pagination pagintaion-md justify-content-end">
        <li className="page-item">
          <span
            onClick={() => props.onPageChange("&laquo;")}
            className="page-link"
          >
            &laquo;
          </span>
        </li>
        <li className="page-item">
          <span
            onClick={() => props.onPageChange("&lsaquo;")}
            className="page-link"
          >
            &lsaquo;
          </span>
        </li>
        {array.map((value) => {
          //   <li className="page-item">
          //     <span className="page-link">{value}</span>
          //   </li>
          if (value === props.page) {
            return (
              <li key={value} className="page-item active">
                <span
                  onClick={() => props.onPageChange(value)}
                  className="page-link"
                >
                  {value}
                </span>
              </li>
            );
          } else {
            return (
              <li key={value} className="page-item ">
                <span
                  onClick={() => props.onPageChange(value)}
                  className="page-link"
                >
                  {value}
                </span>
              </li>
            );
          }
        })}

        <li className="page-item">
          <span
            onClick={() => props.onPageChange("&rsaquo;")}
            className="page-link"
          >
            &rsaquo;
          </span>
        </li>
        <li className="page-item">
          <span
            onClick={() => props.onPageChange("&raquo;")}
            className="page-link"
          >
            &raquo;
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
