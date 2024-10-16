"use client";
import React, { useState } from "react";
import useSubscribers from "./useSubscribers";
import { Button, Dialog, Flex, Table, Text, TextField } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";
import NewSubscriberForm from "./NewSubscriberForm";

export default function Subscribers() {
  const { data, addSubscriber } = useSubscribers();
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data: any) => {
    addSubscriber(data);
    setIsOpen(false);
  };

  return (
    <>
      {data ? (
        <>
          <Dialog.Root open={isOpen}>
            <Dialog.Trigger>
              <Button onClick={() => setIsOpen(true)}>
                <PlusIcon /> New subscriber
              </Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <NewSubscriberForm onSubmit={onSubmit} />
            </Dialog.Content>
          </Dialog.Root>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data?.map((s, i) => (
                <Table.Row key={i}>
                  <Table.RowHeaderCell>{s.fullName}</Table.RowHeaderCell>
                  <Table.Cell>{s.email}</Table.Cell>
                  <Table.Cell>{s.status ? "Active" : "Inactive"}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}
