"use client";
import { SearchIcon } from "@/components/icons";
import { Card, Col, Input, Row, Text } from "@/components/ui";
import Flex from "@/components/ui/Flex";

export const CardComponent = () => {
  return (
    <div className="flex flex-col gap-2 max-w-[800px] mx-auto">
      <Text variant="h1">Card</Text>
      <Text size={"medium"} as="p" className="mt-5">
        A container for displaying information.
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
        <Text variant="h5">Basic Cards</Text>
        <Row cols={24} gutter={"lg"} className="mt-5">
          <Col span={12}>
            <Card className="border rounded-4xl flex  " padding="24px">
              <Text>Content</Text>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              variant="borderLinear"
              className="border rounded-4xl flex "
              padding="24px"
            >
              <Text>Content</Text>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              variant="borderLinear"
              type="success"
              className="border rounded-4xl flex  "
              padding="24px"
            >
              <Text>Content</Text>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
