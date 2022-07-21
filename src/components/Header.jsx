/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Header() {
  return (
    <nav class="navbar navbar-primary bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold text-light"> Tabela </a>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-info text-light" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
}
