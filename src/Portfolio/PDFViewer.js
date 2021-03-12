import * as _ from "lodash";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./pdfViewer.scss";

function Loader() {
  return (
    <div className="loader">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="25 25 50 50"
        width="100%"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="5"
          stroke="#32292f"
          stroke-linecap="round"
          stroke-dashoffset="0"
          stroke-dasharray="100, 200"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            values="0;-30;-124"
            dur="1.25s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dasharray"
            values="0,200;110,200;110,200"
            dur="1.25s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

export default function PDFViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function updatePage(direction) {
    const min = 0;
    const max = numPages - 1;
    console.log("setting page number", direction);
    setPageNumber(
      direction > 0
        ? Math.min(pageNumber + 1, max)
        : Math.max(pageNumber - 1, min)
    );
  }

  const dimensions =
    window.innerWidth <= 768
      ? { height: window.innerHeight * 0.9 }
      : { width: window.innerWidth * 0.95 };

  return (
    <div className="pdf-viewer">
      <Document
        file={props.file}
        onLoadSuccess={onDocumentLoadSuccess.bind(this)}
        className="document"
        loading={<Loader />}
      >
        {_.times(numPages, (i) => (
          <Page
            key={`page_${i + 1}`}
            pageNumber={i + 1}
            className={pageNumber !== i ? "page no-display" : "page"}
            loading={<Loader />}
            {...dimensions}
          />
        ))}
      </Document>
      <div className="pdf-nav-container">
        <div className="pdf-nav">
          <button disabled={pageNumber === 0} onClick={() => updatePage(-1)}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <p>
            Page {pageNumber + 1} of {numPages}
          </p>
          <button
            disabled={pageNumber === numPages - 1}
            onClick={() => updatePage(1)}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
