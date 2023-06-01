import { ContentLayout } from "@/components/Layout";
import { Box, Center, Flex, Spacer, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ReportPackages } from "../components/ReportPackages";
import { ReportPackageCard } from "@/components/ReportPackageCard";
import { OrderForm } from "../components/OrderForm";


const steps = [
    {
        index: 0,
        title: 'Company',
        description: ''
    },
    {
        index: 1,
        title: 'Report package',
        description: ''
    },
    {
        index: 2,
        title: 'Details',
        description: ''
    }
]

export const Order = () => {
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    })
    const stepProps: CustomStepperProps = {
        steps: steps,
        activeStep: activeStep,
        setActiveStep: setActiveStep,
        orientation: 'horizontal',
        size: 'lg',
    }

    return (
        <ContentLayout>
            <CustomStepper {...stepProps} />
        
                {stepProps.steps.filter(step => step.index === activeStep).map(step => (
                    <>
                        {
                            activeStep === 0 ? <Box></Box>
                                : activeStep === 1 ? <ReportPackages />
                                    : activeStep === 2 ? <OrderForm />
                                        : null
                        }
                    </>
                ))}
           
        </ContentLayout>
    )
}

type StepType = {
    index: number
    title: string
    description: string
}

type CustomStepperProps = {
    steps: Array<StepType>
    activeStep: number
    setActiveStep: React.Dispatch<React.SetStateAction<number>>
    orientation?: 'vertical' | 'horizontal',
    size?: 'sm' | 'md' | 'lg',
    minH?: string,
    minW?: string
}

export const CustomStepper = ({
    steps,
    activeStep,
    setActiveStep,
    orientation = 'horizontal',
    size = 'md',
    minH,
    minW
}: CustomStepperProps) => {

    return (
        <Stepper 
        index={activeStep} 
        size={size} 
        orientation={orientation === "vertical" ? 'vertical' : undefined} 
        gap='0' 
        minH={minH} 
        minW={minW}
        colorScheme="tfopink"
        >
            {steps.map((step, index) => (
                <>
                    <Step key={index} onClick={() => setActiveStep(index)}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>

                        <Box flexShrink='1'>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                    </Step>
                </>
            ))}
        </Stepper>
    )
}