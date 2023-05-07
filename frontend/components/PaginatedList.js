import { useState } from "react";
import styles from "./PaginatedList.module.css";

const Paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemActive : styles.pageItem
            }
          >
            <a className={styles.pageLink} onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PaginatedList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const items = props.items;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const pageItems = Paginate(items, currentPage, pageSize);

  return (
    <>
      <div className={styles.container}>
        <table>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>E-Mail</th>
        	</tr>
          {pageItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <Pagination
        items={items.length}
        currentPage={currentPage}
        pageSize={10}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default PaginatedList;
