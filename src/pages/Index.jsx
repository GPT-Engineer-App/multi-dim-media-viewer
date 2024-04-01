import React, { useState } from "react";
import { Box, Heading, Image, Text, Stack, Button, Grid, GridItem, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MediaViewer = () => {
  const [selectedAspect, setSelectedAspect] = useState(null);
  const [detailStep, setDetailStep] = useState(0);

  const aspects = [
    {
      title: "Aspect 1",
      description: "Description of Aspect 1",
      image: "https://images.unsplash.com/photo-1584445651808-d517d171e0c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMDF8ZW58MHx8fHwxNzExOTk5NDA3fDA&ixlib=rb-4.0.3&q=80&w=1080",
      details: ["Detail 1 of Aspect 1", "Detail 2 of Aspect 1", "Detail 3 of Aspect 1"],
    },
    {
      title: "Aspect 2",
      description: "Description of Aspect 2",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMDJ8ZW58MHx8fHwxNzExOTk5NDA4fDA&ixlib=rb-4.0.3&q=80&w=1080",
      details: ["Detail 1 of Aspect 2", "Detail 2 of Aspect 2", "Detail 3 of Aspect 2"],
    },
    // Add more aspects as needed
  ];

  const handleAspectClick = (aspect) => {
    setSelectedAspect(aspect);
    setDetailStep(0);
  };

  const handleDetailStepChange = (step) => {
    setDetailStep(step);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Media Viewer
      </Heading>

      {selectedAspect ? (
        <Box>
          <Button leftIcon={<FaArrowLeft />} mb={4} onClick={() => setSelectedAspect(null)}>
            Back to Overview
          </Button>
          <Image src={selectedAspect.image} alt={selectedAspect.title} mb={4} />
          <Heading as="h2" size="lg" mb={2}>
            {selectedAspect.title}
          </Heading>
          <Text mb={4}>{selectedAspect.description}</Text>

          <Tabs>
            <TabList>
              {selectedAspect.details.map((_, index) => (
                <Tab key={index}>Step {index + 1}</Tab>
              ))}
            </TabList>

            <TabPanels>
              {selectedAspect.details.map((detail, index) => (
                <TabPanel key={index}>
                  <Text>{detail}</Text>
                  <Stack direction="row" mt={4}>
                    <Button leftIcon={<FaArrowLeft />} onClick={() => handleDetailStepChange((detailStep - 1 + selectedAspect.details.length) % selectedAspect.details.length)}>
                      Previous
                    </Button>
                    <Button rightIcon={<FaArrowRight />} onClick={() => handleDetailStepChange((detailStep + 1) % selectedAspect.details.length)}>
                      Next
                    </Button>
                  </Stack>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      ) : (
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {aspects.map((aspect, index) => (
            <GridItem key={index} onClick={() => handleAspectClick(aspect)} cursor="pointer">
              <Image src={aspect.image} alt={aspect.title} />
              <Heading as="h3" size="md" mt={2}>
                {aspect.title}
              </Heading>
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default MediaViewer;
