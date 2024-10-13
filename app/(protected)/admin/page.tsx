import { auth } from "@/auth";

const AdminPage = async () => {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    return <div>Unauthorized</div>;
  }
  return <div>Admin Page</div>;
};
export default AdminPage;
