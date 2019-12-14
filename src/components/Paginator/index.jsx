import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/all";
import ReactPaginator from "react-paginate";

import { WrapperPaginator } from "./styles";

export default function Paginator(props) {
  return (
    <WrapperPaginator>
      <ReactPaginator
        {...props}
        nextLabel={<MdKeyboardArrowRight />}
        previousLabel={<MdKeyboardArrowLeft />}
        containerClassName={"Paginator"}
        pageClassName={"Page"}
        previousClassName={"PreviousButton"}
        nextClassName={"NextButton"}
        activeClassName={"ActivePage"}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
      />
    </WrapperPaginator>
  )
}
