"use client";
import React from "react";
import useSubscribers from "./useSubscribers";
import { Button, Dialog, Flex, Table, Text, TextField } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Demo() {
  const { data } = useSubscribers();

  return (
    <>
      {data ? (
        <>
          <Dialog.Root>
            <Dialog.Trigger>
              <Button>
                <PlusIcon /> New subscriber
              </Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Title>Add new subscriber</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Enter the new subscriber information.
              </Dialog.Description>
              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Full name
                  </Text>
                  <TextField.Root placeholder="Enter the subscribers's full name" />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Email
                  </Text>
                  <TextField.Root placeholder="Enter the subscriber's email" />
                </label>
              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button>Save</Button>
                </Dialog.Close>
              </Flex>
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
