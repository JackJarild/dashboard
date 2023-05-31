import { SidebarWithHeader } from "./SidebarWithHeader";
import { Suspense } from "react";
import { Box, CircularProgress } from "@chakra-ui/react";
import { Navigate, useOutlet } from "react-router-dom";
import { useUser } from "@/lib/auth";

export const MainLayout = () => {
    const outlet = useOutlet()
    const user = useUser()

    if(!user.data) {
        return <Navigate to='/' />
    }

    return (
        <Suspense
            fallback={
                <Box
                    w='100vw'
                    h="100vh"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CircularProgress isIndeterminate color='green.300' />
                </Box>
            }
        >
            <SidebarWithHeader>
                {outlet}
            </SidebarWithHeader>
        </Suspense>
    )
}