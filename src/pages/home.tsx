import styled from "styled-components";
import {
  Page,
  Layout,
  AlphaCard,
  Text,
  DataTable,
  HorizontalStack,
  Button,
  Box,
} from "@shopify/polaris";
import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  {
    name: "Aug 2",
    hats: 4000,
    shirts: 2400,
    shoes: 1600,
  },
  { name: "Aug 3", hats: 3000, shirts: 1398, shoes: 1200 },
  { name: "Aug 4", hats: 2000, shirts: 9800, shoes: 800 },
  { name: "Aug 5", hats: 2780, shirts: 3908, shoes: 3000 },
  { name: "Aug 6", hats: 1890, shirts: 4800, shoes: 2500 },
  { name: "Aug 7", hats: 2390, shirts: 3800, shoes: 1000 },
];

const TableFrame = styled.div`
  .Polaris-DataTable__Table {
    padding: 1rem 0;
  }
  .Polaris-DataTable__Cell {
    padding: 1rem 2rem;
  }
  thead {
    display: none;
  }
  tbody tr:last-child > * {
    border-bottom: none;
  }
`;

function Home() {
  return (
    <Page>
      <Box paddingBlockEnd="4">
        <Layout>
          <Layout.Section secondary>
            <AlphaCard>
              <Box>
                <HorizontalStack align="space-between">
                  <Text as="h5" variant="headingMd">
                    Total searches
                  </Text>
                  <Button plain>View report</Button>
                </HorizontalStack>
                <Box paddingBlockStart="2" paddingBlockEnd="4">
                  <Text as="p" variant="bodyLg">
                    32
                  </Text>
                </Box>
                <Text as="p">SEARCH QUERIES OVER TIME</Text>
              </Box>

              <Box paddingBlockStart="2">
                <div style={{ width: "100%", height: 250 }}>
                  <ResponsiveContainer>
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="2 4" />
                      <Tooltip
                        contentStyle={{
                          background: "#232b35",
                          padding: "9px 12px",
                          border: "0",
                          borderRadius: "3px",
                        }}
                        labelStyle={{
                          color: "#fff",
                          fontSize: "12px",
                          fontWeight: "bold",
                          padding: "0",
                        }}
                        itemStyle={{
                          color: "#fff",
                          fontSize: "12px",
                          padding: "0",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="shirts"
                        stroke="#9c6ade"
                        strokeWidth={3}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="hats"
                        stroke="#47c1bf"
                        strokeWidth={3}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="shoes"
                        stroke="#e0e3e7"
                        strokeWidth={3}
                        dot={false}
                      />
                      <XAxis
                        dataKey="name"
                        stroke="#637381"
                        axisLine={{ stroke: "#c4cdd5" }}
                        tickLine={false}
                      />
                      <Legend
                        verticalAlign="bottom"
                        align="right"
                        iconType="circle"
                        formatter={(value) => (
                          <span
                            style={{
                              color: "#637381",
                            }}
                          >
                            {value}
                          </span>
                        )}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Box>
            </AlphaCard>
          </Layout.Section>

          <Layout.Section secondary>
            <AlphaCard>
              <HorizontalStack align="space-between">
                <Text as="h5" variant="headingMd">
                  Total clicks
                </Text>
                <Button plain>View report</Button>
              </HorizontalStack>
              <Box>
                <Box paddingBlockStart="2" paddingBlockEnd="4">
                  <Text as="p" variant="bodyLg">
                    16
                  </Text>
                </Box>
                <Text as="p">CLICKS OVER TIME</Text>
              </Box>
              <Box paddingBlockStart="2">
                <div style={{ width: "100%", height: 250 }}>
                  <ResponsiveContainer>
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="2 4" />
                      <Tooltip
                        contentStyle={{
                          background: "#232b35",
                          padding: "9px 12px",
                          border: "0",
                          borderRadius: "3px",
                        }}
                        labelStyle={{
                          color: "#fff",
                          fontSize: "12px",
                          fontWeight: "bold",
                          padding: "0",
                        }}
                        itemStyle={{
                          color: "#fff",
                          fontSize: "12px",
                          padding: "0",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="shirts"
                        stroke="#9c6ade"
                        strokeWidth={3}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="hats"
                        stroke="#47c1bf"
                        strokeWidth={3}
                        dot={false}
                      />
                      <XAxis
                        dataKey="name"
                        stroke="#637381"
                        axisLine={{ stroke: "#c4cdd5" }}
                        tickLine={false}
                      />
                      <Legend
                        verticalAlign="bottom"
                        align="right"
                        iconType="circle"
                        formatter={(value) => (
                          <span style={{ color: "#637381" }}>{value}</span>
                        )}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Box>
            </AlphaCard>
          </Layout.Section>
        </Layout>
      </Box>

      <Layout>
        <Layout.Section secondary>
          <AlphaCard>
            <Box paddingBlockEnd="2">
              <HorizontalStack align="space-between">
                <Text as="h5" variant="headingMd">
                  Top products searched
                </Text>
                <Button plain>View report</Button>
              </HorizontalStack>
            </Box>
            <TableFrame>
              <DataTable
                columnContentTypes={["text", "numeric"]}
                headings={["Term", "Queries"]}
                rows={[
                  ["shirt", 21],
                  ["hats", 16],
                  ["shoes", 14],
                ]}
              />
            </TableFrame>
          </AlphaCard>
        </Layout.Section>
        <Layout.Section secondary>
          <AlphaCard>
            <Box paddingBlockEnd="2">
              <HorizontalStack align="space-between">
                <Text as="h5" variant="headingMd">
                  Top products clicked
                </Text>
                <Button plain>View Report</Button>
              </HorizontalStack>
            </Box>
            <TableFrame>
              <DataTable
                columnContentTypes={["text", "numeric"]}
                headings={["Product", "Clicks"]}
                rows={[
                  ["Stylish Hat", 21],
                  ["White Staple Shirt", 16],
                  ["Black Athletic Shoes", 14],
                ]}
              />
            </TableFrame>
          </AlphaCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default Home;
