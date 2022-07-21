import React from "react";
import { Container, FormLabel, FormText } from "react-bootstrap";

export default function Tabela() {
  return (
    <Container className="">
      <FormText class=" w-80 p-3 mt-5  bg-primary text-uppercase text-light fw-bold  d-flex justify-content-center ">
        Tabela de usuários
      </FormText>
      <FormLabel className={"border border-primary mb-5 p-3 border-2 "}>
        <form class="row g-3 ">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label fw-bold text-info">
              Nome
            </label>
            <input type={"text"} class="form-control" placeholder="Nome" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label fw-bold text-info">
              Email
            </label>
            <input type={"email"} class="form-control" placeholder="email@exemplo.com"id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label fw-bold text-info">
              Telefone
            </label>
            <input
              type={"tel"}
              class="form-control"
              id="inputAddress"
              placeholder="Ex: 45 9 1234 5678"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label fw-bold text-info">
              Ultima visita
            </label>
            <input
              type={"date"}
              class="form-control"
              id="inputAddress2"
              placeholder="Data da última visita"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label fw-bold text-info">
              Cidade
            </label>
            <input type={"text"} class="form-control" placeholder="Cidade" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label fw-bold text-info">
              Estado
            </label>
            <select id="inputState" class="form-select">
              <option selected>Selecione o estado...</option>
              <option>PR</option>
              <option>SC</option>
              <option>SP</option>
              <option>MT</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label fw-bold text-info">
              CEP
            </label>
            <input type={"text"} class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Usuario ativo
              </label>
            </div>
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-primary text-light" type={"button"}>
              Button
            </button>
          </div>
        </form>
      </FormLabel>
    </Container>
  );
}
