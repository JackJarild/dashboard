import { useState } from "react";
import { SidebarWithHeader } from "./SidebarWithHeader";


type MainLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <SidebarWithHeader>
                {children}
            </SidebarWithHeader>
            {/* <Container component={'main'} maxWidth={'xl'} sx={{ mt: 4 }}>
                <Grid container minHeight={'100vh'}>
                    {children}
                </Grid>
            </Container> */}
        </>
    );
};