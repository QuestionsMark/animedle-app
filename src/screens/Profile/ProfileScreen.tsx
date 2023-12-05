import { ProfileProvider, useProfile } from "../../contexts/profile.context";
import { Profile } from "./Profile";

export const ProfileScreen = () => {
    return (
        <ProfileProvider>
            <ProfileScreen.Guard />
        </ProfileProvider>
    );
};

ProfileScreen.Guard = () => {
    const { profile } = useProfile();

    // Add error handling TODO

    return profile && <Profile />;
};