import { Container } from "react-bootstrap";
import Header from "../../../Layouts/Header";
import UserProfilenew from "../../../Component/UserComponent/UserDashboardComponent/UserProfilenew";

function UserProfile() {
  return (
    <>
      <Header />
      <section>
        <UserProfilenew />
      </section>
    </>
  );
}

export default UserProfile;
