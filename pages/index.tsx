import React, { useMemo, useState, useEffect } from "react";
import type { NextPage } from 'next'
import axios from "axios";

import styles from '../styles/Home.module.css'
import Table from '../components/Table'

const Home: NextPage = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Products List",
        columns: [
          {
            Header: "Product",
            accessor: "title"
          },
          {
            Header: "Status",
            accessor: "status"
          },
          {
            Header: "Type",
            accessor: "product_type"
          },
          {
            Header: "Vendor",
            accessor: "vendor"
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://9w54n9ttb6.execute-api.ap-southeast-1.amazonaws.com/dev/products");
      setData(result.data);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Table columns={columns} data={data} />
      </main>
    </div>
  )
}

export default Home
