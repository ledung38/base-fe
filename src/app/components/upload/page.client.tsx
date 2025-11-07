"use client";
import { AddPlusCircleIcon, CheckBig, SearchIcon } from "@/components/icons";
import { Button, Card, Upload, Text } from "@/components/ui";
import { DateFormDemo } from "@/components/ui/DatePicker";
import Flex from "@/components/ui/Flex";
import { UploadIcon } from "lucide-react";
import React, { useState } from "react";

export const UploadComponent = () => {
  const [fileList, setFileList] = useState<File[] | null>(null);

  const [events, setEvents] = React.useState([
    {
      id: "1",
      start: new Date(2025, 10, 3), // 3/11/2025
      end: new Date(2025, 10, 3),
      title: "Họp nhóm dự án",
      color: "bg-blue-500",
    },
    {
      id: "2",
      start: new Date(2025, 10, 5),
      end: new Date(2025, 10, 7),
      title: "Workshop lập trình",
      color: "bg-green-500",
    },
  ]);

  return (
    <div className="flex flex-col gap-2 max-w-[800px] mx-auto">
      <Text variant="h1">Upload</Text>
      <Text size={"medium"} as="p" className="mt-5">
        Used to select and upload files or drag and drop files.
      </Text>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nisi,
        doloremque officia eum iusto obcaecati necessitatibus eos mollitia
        laborum aspernatur non in aut delectus quam dolorem facilis est saepe
        nulla.
      </Text>

      <Text variant="h3" className="block mt-5">
        Example
      </Text>

      <div>
        <Text variant="h5">Basic Uploades</Text>
        <Card
          className="border rounded-4xl flex mt-5 "
          padding="24px"
          classNameWrapper="gap-10"
        >
          <Flex align={"center"} justify={"center"} gap={16}>
            <Upload
              className="w-fit"
              noDrag
              onChange={(files) => {
                setFileList((prev) => [...(prev ?? []), ...files]);
              }}
            >
              <Button size="lg">
                <AddPlusCircleIcon className="size-[1.5rem] text-white" />
                Tải bài làm
              </Button>
            </Upload>
            {fileList && fileList.length > 0 && (
              <div className="flex flex-col gap-2">
                {fileList.map((file, index) => (
                  <div key={index}>
                    <Text>{file.name}</Text>
                  </div>
                ))}
              </div>
            )}
          </Flex>
          <Flex align={"center"} justify={"center"} gap={16}>
            <Upload className="w-fit"></Upload>
          </Flex>

          <Flex align={"center"} justify={"center"} gap={16}>
            <Upload className="w-fit">
              <Flex direction={"column"} gap={4} align={"center"}>
                <UploadIcon className="size-[1.5rem] text-primary" />
                <Text className="text-primary">Tải file</Text>
              </Flex>
            </Upload>
          </Flex>
        </Card>
      </div>
    </div>
  );
};
