import { LikedCars } from "Components/UserComponents";
import { ProfileLink } from "Components/UserComponents/ProfileLinks/ProfileLinks";
import { useProfile } from "../UserProfile/useProfile";

export const UserLikedCars = () => {
  const { user, likedCars, setLikedCar, isLiked, logged } = useProfile();
  return (
    <>
      <ProfileLink isAdmin={user.isAdmin} />
      <LikedCars
        cars={likedCars!}
        isLiked={isLiked}
        setLikedCar={setLikedCar}
        user={logged}
      />
    </>
  );
};
