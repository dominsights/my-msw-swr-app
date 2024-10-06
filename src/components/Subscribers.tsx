"use client";
import React from "react";
import useSubscribers from "./useSubscribers";
import SubscriberListItem from "./SubscriberListItem";
import { Button, Table } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Demo() {
  const { data } = useSubscribers();

  return (
    <>
    <Button>
      <PlusIcon/> New subscriber
    </Button>
      {data ? (
            <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
          
            <Table.Body>
              {data?.map((s, i) => 
                <Table.Row key={i}>
                <Table.RowHeaderCell>{s.fullName}</Table.RowHeaderCell>
                <Table.Cell>{s.email}</Table.Cell>
                <Table.Cell>{s.status ? 'Active': 'Inactive'}</Table.Cell>
                </Table.Row>
                )}

            </Table.Body>
          </Table.Root>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
