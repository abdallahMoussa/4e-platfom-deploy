import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useIntl } from "react-intl";

export const QuillEditor = ({ description }) => {
   const quillRef = useRef(null);
   const intl = useIntl();

   useEffect(() => {
      if (quillRef.current) {
         new Quill(quillRef.current, {
            theme: "snow",
            modules: {
               keyboard: {
                  blotFormatter: true,
               },
            },
            placeholder: intl.formatMessage({ id: description })
         });
      }
   }, []);

   return <div ref={quillRef} />;
};
