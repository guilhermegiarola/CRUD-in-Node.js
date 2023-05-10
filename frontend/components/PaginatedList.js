import { useState } from "react";
import styles from "./PaginatedList.module.css";
import axios from "axios";

const Paginate = (items, pageNumber, pageSize) => {
  if (items.length < pageSize) {
    return items;
  }
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
  const [currentPage, setCurrentPage] = useState(props.currentPage);
  const pageSize = 10;
  const items = props.items;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const pageItems = Paginate(items, currentPage, pageSize);
  return (
    <>
      <div className={styles.container}>
        <table className={styles.table}>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>E-Mail</th>
            <th></th>
            <th></th>
          </tr>
          {pageItems.map((item) => {
            return (
              <tr key={item.id}>
                <td className={styles.tableCell}>{item.nome}</td>
                <td className={styles.tableCell}>{item.cpf}</td>
                <td className={styles.tableCell}>{item.email}</td>
                <td className={styles.buttonTableCell}>
                  <button
                    className={styles.button}
                    onClick={(e) => {
                      props.EditarUsuario(item);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className={styles.button}
                    onClick={(e) => {
                      props.DesativarUsuario(item.id);
                    }}
                  >
                    {props.buttonLabel}
                  </button>
                  <button
                    className={styles.button}
                    onClick={(e) => {
                      props.BloquearUsuario(item.id);
                    }}
                  >
                    Bloquear
                  </button>
                </td>
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
