import { Text } from "@/components/ui";
import Flex from "@/components/ui/Flex";

const Footer = () => {
  return (
    <footer className="bg-bg-footer xxl:pt-8 z-[20] pt-2">
      {/* <Container className="xxl:py-8 py-2">
        <Row gutter={[12, 12]} className="mt-6">
          <Col span={6} className="flex flex-col gap-2 max-sm:col-span-12">
            <Flex gap={8} align="center">
              <Text size={TextSize.MEDIUM}>Về chúng tôi</Text>
            </Flex>

            <Flex gap={16}>
              <Flex gap={8} direction={"column"}>
                <Link href={"#"} style={{ fontSize: "14px" }}>
                  Giới thiệu
                </Link>

                <Link href={"#"} style={{ fontSize: "14px" }}>
                  Liên hệ
                </Link>
              </Flex>
              <Flex gap={8} direction={"column"}>
                <Link href={"#"} style={{ fontSize: "14px" }}>
                  Hướng dẫn sử dụng
                </Link>

                <Link href={"#"} style={{ fontSize: "14px" }}>
                  Điều khoản sử dụng
                </Link>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </Container>
       */}
      <Flex
        justify="center"
        align="center"
        className="border-border bg-accent  mt-5 border-t border-solid py-4"
      >
        <Text className="text-accent-foreground">
          © 2025 LD - Design. All rights reserved.
        </Text>
      </Flex>
    </footer>
  );
};

export default Footer;
