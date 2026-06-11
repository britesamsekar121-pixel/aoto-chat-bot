import MainLayout
from "../layouts/MainLayout";

import UserProfile
from "../components/UserProfile";

import PersonalityChart
from "../components/PersonalityChart";

export default function Profile() {

  return (
    <MainLayout>

      <UserProfile />

      <PersonalityChart />

    </MainLayout>
  );
}