import { useEffect, useState } from "react";
import { MyWindow } from "../types";

const Profile = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const getProfile = async () => {
    console.log((window as MyWindow & typeof globalThis).Kakao.API);
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      const data = await (
        window as MyWindow & typeof globalThis
      ).Kakao.API.request({
        url: "/v2/user/me"
      });
      console.log(data);
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <img src={profileImage} alt="profile" />
    </div>
  );
};
export default Profile;