export default function UserProfile() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (
    <div className="user-profile">
      <h2>User Profile</h2>

      <p>
        Email:
        {user?.email}
      </p>
    </div>
  );
}