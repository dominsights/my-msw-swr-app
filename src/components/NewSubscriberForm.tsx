import React from "react";
import { Button, Dialog, Flex, Table, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";

export default function NewSubscriberForm({ onSubmit }: { onSubmit: any }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Dialog.Title>Add new subscriber</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        Enter the new subscriber information.
      </Dialog.Description>
      <Flex direction="column" gap="3">
        <form id="dialogForm" onSubmit={handleSubmit(onSubmit)}>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Full name
            </Text>
            <TextField.Root
              placeholder="Enter the subscribers's full name"
              {...register("fullName", {
                required: true,
                maxLength: 80,
              })}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              placeholder="Enter the subscriber's email"
              {...register("email", { required: true, maxLength: 80 })}
            />
          </label>
        </form>
      </Flex>
      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Cancel
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button type="submit" form="dialogForm">
            Save
          </Button>
        </Dialog.Close>
      </Flex>
    </>
  );
}
