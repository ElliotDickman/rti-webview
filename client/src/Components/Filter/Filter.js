import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import styles from "./Filter.module.css";

const Filter = ({ data }) => {
  const [selectedData, setselectedData] = useState(data[0]);

  return (
    <Listbox
      as="div"
      className={`${styles.filterListBox}`}
      value={selectedData}
      onChange={setselectedData}
    >
      <Listbox.Button type="button" className={`${styles.filterButton}`}>
        {selectedData.name}
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2458 1.1675C10.0584 0.981251 9.80498 0.876709 9.5408 0.876709C9.27661 0.876709 9.02316 0.981251 8.8358 1.1675L5.2458 4.7075L1.7058 1.1675C1.51844 0.981251 1.26498 0.876709 1.0008 0.876709C0.736612 0.876709 0.483161 0.981251 0.295798 1.1675C0.20207 1.26046 0.127675 1.37107 0.0769067 1.49292C0.026138 1.61478 0 1.74549 0 1.8775C0 2.00951 0.026138 2.14022 0.0769067 2.26208C0.127675 2.38394 0.20207 2.49454 0.295798 2.5875L4.5358 6.8275C4.62876 6.92123 4.73936 6.99562 4.86122 7.04639C4.98308 7.09716 5.11379 7.1233 5.2458 7.1233C5.37781 7.1233 5.50852 7.09716 5.63037 7.04639C5.75223 6.99562 5.86283 6.92123 5.9558 6.8275L10.2458 2.5875C10.3395 2.49454 10.4139 2.38394 10.4647 2.26208C10.5155 2.14022 10.5416 2.00951 10.5416 1.8775C10.5416 1.74549 10.5155 1.61478 10.4647 1.49292C10.4139 1.37107 10.3395 1.26046 10.2458 1.1675Z"
            fill="#353535"
          />
        </svg>
      </Listbox.Button>
      <Listbox.Options className={`${styles.filterOptions}`}>
        {data.map((data) => (
          <Listbox.Option
            className={`${styles.filterOption}`}
            key={data.id}
            value={data}
          >
            {data.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default Filter;
