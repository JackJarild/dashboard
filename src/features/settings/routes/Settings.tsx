import { useNavigate } from "react-router-dom";
import { UserProfileCard } from "../components/UserProfileCard"
import { MainLayout } from "@/components/Layout";


export const Settings = () => {
    //const navigate = useNavigate();

    return (
        <MainLayout>
            <UserProfileCard />
        </MainLayout>
    )
}