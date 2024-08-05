"use client";
import { SearchFilter } from "@/components/filtroBusca";
import { Pageable } from "@/components/pageable";
import { Table } from "@/components/table";
import { TableContent } from "@/components/table/tableContent";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const ClientsPage = () => {
  const [searchString, setSearchString] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(7);


  async function getStores(
    pageNumber?: number,
    pageSize?: number,
    searchString?: string
  ) {
    return api.get("/clients", {
      params: {
        pageNumber,
        pageSize,
        searchString,
      },
    });
  }

  const { data, isLoading } = useQuery({
		queryKey: ['/clients', pageNumber, pageSize, searchString],
		queryFn: () => getStores(pageNumber, pageSize, searchString),
		select({ data }) {
			return data
		},
	})

  return (
    <div className=" bg-slate-500 ">
      <div className="flex h-auto w-full flex-col gap-4 rounded-xl bg-white px-0 py-4">
        <SearchFilter
          id="searchFilter"
          placeholder="Digite o nome do cliente"
          onSearchChange={(value) => {
            setSearchString(value);
            setPageNumber(1);
          }}
        />

        <div className="flex  w-full flex-col scrollbar-hide">
          <Table.Root className="h-[600px] w-full">
            <Table.Header>
              <Table.Row>
                <Table.Head>Nome</Table.Head>
                <Table.Head>CPF</Table.Head>
                <Table.Head>Telefone</Table.Head>
                <Table.Head>Email</Table.Head>
                <Table.Head className="w-12"></Table.Head>
                <Table.Head className="w-12"></Table.Head>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <TableContent
                totalItemCount={data?.totalItemCount}
                pageName="clients"
              >
                <Table.Row>
                  <Table.Cell>Nome</Table.Cell>
                  <Table.Cell>CPF</Table.Cell>
                  <Table.Cell>Telefone</Table.Cell>
                  <Table.Cell>Email</Table.Cell>
                  <Table.Cell className="w-12"></Table.Cell>
                </Table.Row>

                {/* {data?.items.map((item: any) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>codigo</Table.Cell>
                    <Table.Cell>Nome</Table.Cell>
                    <Table.Cell>CPF</Table.Cell>
                    <Table.Cell>Telefone</Table.Cell>
                    <Table.Cell>Email</Table.Cell>
                    <Table.Cell className="w-12"></Table.Cell>
                    <Table.Cell>
                    </Table.Cell>
                  </Table.Row>
                ))} */}
                
              </TableContent>
            </Table.Body>
          </Table.Root>

          <Pageable.Root>
            <div className="flex flex-grow items-center gap-3">
              <Pageable.Total
                name="Cliente"
                pluralName="Clientes"
                total={data?.totalItemCount}
              />
            </div>
            <Pageable.Loading isLoading={isLoading} />
            <Pageable.PerPage
              pageSize={pageSize}
              pluralName="Clientes"
              setPageNumber={setPageNumber}
              setPageSize={setPageSize}
            />
            <div className="flex items-center">
              <Pageable.PageRange
                firstItemOnPage={data?.firstItemOnPage}
                lastItemOnPage={data?.lastItemOnPage}
                totalItemCount={data?.totalItemCount}
              />
              <Pageable.PreviousPageButton
                isFirstPage={data?.isFirstPage}
                setPageNumber={setPageNumber}
              />

              <Pageable.NextPageButton
                isLastPage={data?.isLastPage}
                setPageNumber={setPageNumber}
              />
            </div>
          </Pageable.Root>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
