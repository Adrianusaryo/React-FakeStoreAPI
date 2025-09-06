import { useLogin } from "../../hooks/useLogin";

const Profile = () => {
  const username = useLogin();
  return (
    <div className="bg-amber-400">
      <h1 className="text-center text-3xl">Profile</h1>
      <span>Username : {username}</span>
    </div>
  );
};

export default Profile;
